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
      <div className="absolute inset-x-0 top-12 -z-10 mx-auto h-72 w-[48rem] max-w-full rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.16),transparent_72%)] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_72%)] blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Enterprise Services"
          title="Structured digital services designed for reliable delivery and long-term scale."
          description="Each engagement is shaped around product clarity, sound architecture, and execution standards teams can depend on."
          centered
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="h-full"
              >
                <div className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-7 backdrop-blur-xl transition hover:border-slate-300 hover:bg-white/90 dark:border-white/10 dark:bg-white/4 dark:hover:border-white/20 dark:hover:bg-white/5">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                            Enterprise Service
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full border border-slate-200/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                        Outcome Focused
                      </span>
                    </div>

                    <div className="min-h-[112px] pt-6">
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex h-full flex-col rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                          Technologies Used
                        </p>
                        <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex h-full flex-col rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                          Industry Use Case
                        </p>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {service.industryUseCase}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-1">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-medium text-slate-700 transition hover:text-slate-950 hover:underline dark:text-slate-300 dark:hover:text-white"
                    >
                      {service.cta} <span className="ml-1.5">-&gt;</span>
                    </a>
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
