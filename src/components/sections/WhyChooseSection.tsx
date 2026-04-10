import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/images/byteonix-logo.png'
import { advantages, type AdvantageIcon } from '../../data/company'
import { Container } from '../layout/Container'

type IconProps = {
  className?: string
}

function ShieldIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M12 3.5 5.5 6v5.4c0 4.5 2.7 7.5 6.5 9.1 3.8-1.6 6.5-4.6 6.5-9.1V6L12 3.5Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.7 12.1 1.7 1.7 3.2-3.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LayersIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 12 8 4.5 8-4.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 15.5 8 4.5 8-4.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CpuIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.8" />
      <path d="M9 1.5v3M15 1.5v3M9 19.5v3M15 19.5v3M19.5 9h3M19.5 15h3M1.5 9h3M1.5 15h3" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 10h4v4h-4z" strokeWidth="1.8" />
    </svg>
  )
}

function BoltIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M13 2 5.5 13h4.8L9.8 22 18.5 10.8H13L13 2Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const iconMap: Record<AdvantageIcon, ComponentType<IconProps>> = {
  trust: ShieldIcon,
  scale: LayersIcon,
  tech: CpuIcon,
  speed: BoltIcon,
}

export function WhyChooseSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-brand-500/16 blur-3xl dark:bg-brand-500/20" />
            <div className="absolute bottom-6 right-2 h-36 w-36 rounded-full bg-violet-500/16 blur-3xl dark:bg-violet-500/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(148,163,184,0.22)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(2,11,20,0.35)]">
              <div className="rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(17,120,229,0.12),rgba(100,56,220,0.1))] p-8 dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(17,120,229,0.18),rgba(100,56,220,0.16))]">
                <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-8 dark:border-white/10 dark:bg-slate-950/55">
                  <img src={logo} alt="Byteonix logo" className="mx-auto w-full max-w-[18rem] object-contain" />
                  <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 dark:border-white/10 dark:bg-white/6">
                      <p className="text-2xl font-semibold text-slate-950 dark:text-white">24/7</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Support</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 dark:border-white/10 dark:bg-white/6">
                      <p className="text-2xl font-semibold text-slate-950 dark:text-white">Secure</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-200">
              Why Choose Byteonix
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl">
              A dependable technology partner built for modern business growth.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              We combine strategic thinking, modern engineering, and fast execution
              to deliver digital products businesses can trust and scale with
              confidence.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {advantages.map((item, index) => {
                const Icon = iconMap[item.icon]

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_16px_50px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_16px_50px_rgba(2,11,20,0.22)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-500/20 via-sky-400/16 to-violet-500/18 text-brand-700 dark:border-white/12 dark:from-brand-500/30 dark:via-sky-400/18 dark:to-violet-500/24 dark:text-brand-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
