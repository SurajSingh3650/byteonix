import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

type Theme = 'light' | 'dark'
type ThemePreference = Theme | 'system'

type ThemeContextValue = {
  theme: Theme
  preference: ThemePreference
  setTheme: (preference: ThemePreference) => void
  toggleTheme: () => void
  isDark: boolean
}

const STORAGE_KEY = 'byteonix-theme'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(preference: ThemePreference): Theme {
  return preference === 'system' ? getSystemTheme() : preference
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [preference, setPreference] = useState<ThemePreference>(() => {
    if (typeof window === 'undefined') {
      return 'system'
    }

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored
    }

    return 'system'
  })

  const [theme, setResolvedTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return resolveTheme(
      (window.localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ?? 'system',
    )
  })

  useEffect(() => {
    const resolved = resolveTheme(preference)
    setResolvedTheme(resolved)
    applyThemeClass(resolved)
    window.localStorage.setItem(STORAGE_KEY, preference)
  }, [preference])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (preference !== 'system') {
        return
      }

      const resolved = getSystemTheme()
      setResolvedTheme(resolved)
      applyThemeClass(resolved)
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [preference])

  const setTheme = useCallback((nextPreference: ThemePreference) => {
    setPreference(nextPreference)
  }, [])

  const toggleTheme = useCallback(() => {
    setPreference((currentPreference) => {
      const activeTheme = resolveTheme(currentPreference)
      return activeTheme === 'dark' ? 'light' : 'dark'
    })
  }, [])

  const value = useMemo(
    () => ({
      theme,
      preference,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
    }),
    [theme, preference, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
