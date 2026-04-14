import { motion } from 'framer-motion'
import logo from '../../assets/images/byteonix-logo.png'
import { trustIndustries } from '../../data/company'
import { Container } from '../layout/Container'

const trustPoints = ['Secure delivery practices', 'Scalable architecture', 'Production-ready systems']

type TrustTone = 'industry' | 'neutral'
type TrustVariant = 'row' | 'cards'

const trustContent: Record<
  TrustTone,
  {
    eyebrow: string
    title: string
    subtitle?: string
  }
> = {
  industry: {
    eyebrow: 'Trusted By',
    title: 'Trusted by modern digital businesses',
  },
  neutral: {
    eyebrow: 'Trusted By',
    title: 'Built for startups and growing businesses',
    subtitle:
      'Designed for teams that need dependable delivery, scalable systems, and long-term technical stability.',
  },
}

const heroMetrics = [
  {
    label: 'System Uptime',
    value: '99.9%',
    detail: 'Monitored services and resilient infrastructure planning.',
    progress: '99.9%',
  },
  {
    label: 'Delivery Speed',
    value: '+35% faster',
    detail: 'Structured execution that reduces blockers and handoff delays.',
    progress: '72%',
  },
  {
    label: 'Deployments',
    value: '20+ per month',
    detail: 'Release cadence supported by testing and deployment discipline.',
    progress: '68%',
  },
  {
    label: 'Client Satisfaction',
    value: '99%',
    detail: 'Consistent communication, predictable delivery, and measurable outcomes.',
    progress: '90%',
  },
]

type HeroTrustSectionProps = {
  tone?: TrustTone
  variant?: TrustVariant
}

function TrustMarker() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/6 dark:text-slate-300">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-500" />
    </span>
  )
}

export function HeroTrustSection({
  tone = 'industry',
  variant = 'row',
}: HeroTrustSectionProps) {
  const content = trustContent[tone]

  if (variant === 'cards') {
    return (
      <div className="mt-10 border-t border-slate-200/80 pt-6 dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          {content.title}
        </h2>
        {content.subtitle ? (
          <p className="mt-2 max-w-[34rem] text-sm leading-6 text-slate-600 dark:text-slate-300">
            {content.subtitle}
          </p>
        ) : null}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {trustIndustries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + index * 0.05 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/85 bg-white/72 px-4 py-3 text-sm font-medium text-slate-700 backdrop-blur-xl transition hover:border-slate-300 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/16 dark:hover:bg-white/7"
            >
              <TrustMarker />
              <span>{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10 border-t border-slate-200/80 pt-8 dark:border-white/10">
      <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-400 dark:text-slate-500">
        {content.eyebrow}
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white sm:text-xl">
            {content.title}
          </h2>
          {content.subtitle ? (
            <p className="mt-3 max-w-[34rem] text-sm leading-6 text-slate-600 dark:text-slate-300">
              {content.subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400 dark:text-slate-500 sm:gap-x-8">
          {trustIndustries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.05 }}
              whileHover={{ y: -1 }}
              className="cursor-default tracking-[0.12em] uppercase transition hover:text-slate-600 dark:hover:text-slate-300"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.08),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(15,23,42,0.08),transparent_24%),linear-gradient(180deg,#f7fafc_0%,#eef3f8_50%,#edf2f7_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(148,163,184,0.08),transparent_24%),linear-gradient(180deg,#07111a_0%,#0b1420_48%,#0d1724_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/12" />
      <div className="absolute left-1/2 top-14 -z-10 h-72 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.16),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_70%)] blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-[38rem]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm shadow-slate-200/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-slate-200 dark:shadow-slate-950/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Delivery partner for startups and enterprise teams
            </div>

            <h1 className="mt-8 max-w-[12ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Digital products built for scale, security, and steady growth.
            </h1>

            <p className="mt-6 max-w-[37rem] text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              Byteonix designs and delivers web platforms, cloud systems, and custom
              software for organizations that need reliable execution, strong
              architecture, and production-ready outcomes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition hover:bg-slate-800 hover:shadow-[0_18px_38px_rgba(15,23,42,0.22)] dark:border-white dark:bg-white dark:text-slate-950 dark:shadow-[0_14px_34px_rgba(2,6,23,0.3)] dark:hover:bg-slate-100"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/75 px-7 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-xl transition hover:border-slate-400 hover:bg-white dark:border-white/12 dark:bg-white/6 dark:text-slate-100 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                View Our Work
              </motion.a>
            </div>

            <div className="mt-7">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Trusted by growing startups and digital-first businesses.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                {trustPoints.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <HeroTrustSection tone="industry" variant="row" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <div className="absolute inset-x-10 top-8 -z-10 h-44 rounded-full bg-slate-300/35 blur-3xl dark:bg-sky-500/10" />

            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/72 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_70px_rgba(2,8,23,0.32)]">
              <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.94))] p-5 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(8,15,28,0.96),rgba(10,19,31,0.94))]">
                <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Byteonix brand mark"
                      className="h-12 w-12 rounded-2xl border border-slate-200/70 object-cover dark:border-white/10"
                    />
                    <div>
                      <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                        Delivery Overview
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Operational visibility for modern product and engineering teams.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    Active
                  </span>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-slate-200/80 bg-slate-950 px-5 py-4 text-white dark:border-white/10 dark:bg-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Delivery Health
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">Stable</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Current Focus
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-100">
                        Platform builds and cloud modernization
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {heroMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
                      className="rounded-[1.35rem] border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                            {metric.value}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: metric.progress }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
                        />
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {metric.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
