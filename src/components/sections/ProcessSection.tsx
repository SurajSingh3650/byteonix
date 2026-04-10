import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { processSteps, type ProcessStepIcon } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

type IconProps = { className?: string }

function DiscoveryIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><circle cx="11" cy="11" r="6.5" strokeWidth="1.8" /><path d="m20 20-3.5-3.5" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
function PlanningIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><rect x="4" y="5" width="16" height="15" rx="2.5" strokeWidth="1.8" /><path d="M8 3v4M16 3v4M8 10h8M8 14h5" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
function DevelopmentIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14.5 4.5l-5 15" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function DeliveryIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 8h11v8H4zM15 11h3l2 2.5V16h-5" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="8" cy="18" r="1.2" fill="currentColor" strokeWidth="0" /><circle cx="18" cy="18" r="1.2" fill="currentColor" strokeWidth="0" /></svg>
}

const iconMap: Record<ProcessStepIcon, ComponentType<IconProps>> = {
  discovery: DiscoveryIcon,
  planning: PlanningIcon,
  development: DevelopmentIcon,
  delivery: DeliveryIcon,
}

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Process" title="A clear delivery process that keeps teams aligned and launches on track." description="We use a structured but flexible execution model so strategy, design, engineering, and delivery stay connected from start to finish." centered />
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-300/50 via-slate-200/70 to-transparent dark:via-white/10 lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.article key={step.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="relative rounded-[1.7rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(2,11,20,0.2)]">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-500/20 via-sky-400/16 to-violet-500/18 text-brand-700 dark:border-white/10 dark:from-brand-500/26 dark:via-sky-400/16 dark:to-violet-500/18 dark:text-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
