import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { services, type ServiceIcon } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

type IconProps = {
  className?: string
}

function GlobeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 12h18" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 3c3 3.1 4.5 5.9 4.5 9S15 17.9 12 21c-3-3.1-4.5-5.9-4.5-9S9 6.1 12 3Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    </svg>
  )
}

function MobileIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" strokeWidth="1.8" />
      <path d="M10 5.5h4" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="18" r="0.9" fill="currentColor" strokeWidth="0" />
    </svg>
  )
}

function CloudIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path
        d="M8.5 18.5h8.2a4.3 4.3 0 0 0 .8-8.5 5.6 5.6 0 0 0-10.8 1.4A3.8 3.8 0 0 0 8.5 18.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 10.5v6" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m9.8 14.4 2.2 2.2 2.2-2.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CodeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="m8 8-4 4 4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16 8 4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14.5 4.5-5 15" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const iconMap: Record<ServiceIcon, ComponentType<IconProps>> = {
  web: GlobeIcon,
  app: MobileIcon,
  cloud: CloudIcon,
  software: CodeIcon,
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-80 w-[50rem] max-w-full rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),rgba(139,92,246,0.08),transparent_74%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.16),rgba(139,92,246,0.08),transparent_74%)] blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Enterprise Services"
          title="Execution-focused digital services built around business outcomes, not just deliverables."
          description="Each engagement is structured to reduce complexity, accelerate delivery, and create systems your team can actually scale with."
          centered
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group rounded-[1.9rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.26),rgba(139,92,246,0.22),rgba(255,255,255,0.7))] p-[1px] shadow-[0_24px_70px_rgba(148,163,184,0.22)] dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.4),rgba(139,92,246,0.35),rgba(255,255,255,0.08))] dark:shadow-[0_24px_70px_rgba(2,11,20,0.3)]"
              >
                <div className="relative h-full rounded-[1.85rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.96))] p-7 transition duration-300 group-hover:border-brand-300/30 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(10,17,28,0.94),rgba(16,19,35,0.92))] dark:group-hover:border-brand-200/20">
                  <div className="absolute inset-0 rounded-[1.85rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_32%)]" />
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-500/20 via-sky-400/16 to-violet-500/18 text-brand-700 shadow-lg shadow-slate-200/60 transition duration-300 group-hover:shadow-[0_0_28px_rgba(96,165,250,0.2)] dark:border-white/12 dark:from-brand-500/28 dark:via-sky-400/18 dark:to-violet-500/22 dark:text-brand-100 dark:shadow-brand-950/25 dark:group-hover:shadow-[0_0_28px_rgba(96,165,250,0.28)]">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                            Enterprise delivery
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-brand-100">
                        Outcome focused
                      </span>
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-[1fr_1fr]">
                      <div className="rounded-[1.3rem] border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                          Technologies used
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.3rem] border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                          Industry use case
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {service.industryUseCase}
                        </p>
                      </div>
                    </div>

                    <motion.a
                      href="#contact"
                      whileHover={{ x: 4 }}
                      className="mt-8 inline-flex items-center text-sm font-semibold text-brand-700 transition duration-300 group-hover:text-brand-900 dark:text-brand-100 dark:group-hover:text-white"
                    >
                      {service.cta}
                      <span className="ml-2 text-base">→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
