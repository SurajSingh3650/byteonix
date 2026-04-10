import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { company } from '../../data/company'
import logo from '../../assets/images/byteonix-logo.png'
import { ThemeToggle } from '../common/ThemeToggle'
import { Container } from './Container'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-slate-950/55 dark:supports-[backdrop-filter]:bg-slate-950/45">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="group flex min-w-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 shadow-lg shadow-slate-200/70 transition duration-300 group-hover:scale-[1.02] group-hover:border-brand-300/35 group-hover:bg-white dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/40 dark:group-hover:bg-white/8">
              <img
                src={logo}
                alt="Byteonix logo"
                className="h-11 w-11 rounded-xl object-cover"
              />
            </div>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold tracking-wide text-slate-900 transition duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-100">
                {company.name}
              </span>
              <span className="block truncate text-[11px] uppercase tracking-[0.28em] text-brand-700/80 dark:text-brand-200/85">
                Your Trusted Technology Partner
              </span>
            </span>
          </motion.a>

          <div className="hidden items-center gap-3 md:flex">
            <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-2 py-2 shadow-lg shadow-slate-200/60 md:flex dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/30">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-900 transition duration-300 hover:border-brand-300/35 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span className="relative flex h-5 w-5 flex-col items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="overflow-hidden md:hidden"
            >
              <nav className="mt-4 rounded-3xl border border-slate-200/80 bg-white/90 p-3 shadow-2xl shadow-slate-200/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 dark:shadow-slate-950/40">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: index * 0.04 }}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/8 dark:hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  )
}
