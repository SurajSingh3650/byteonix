import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { industries, type IndustryIcon } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

type IconProps = { className?: string }

function FintechIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><rect x="3" y="6" width="18" height="12" rx="2.5" strokeWidth="1.8" /><path d="M7 14h4M15 10h2M15 14h2" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
function HealthcareIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M12 5v14M5 12h14" strokeWidth="1.8" strokeLinecap="round" /><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.8" /></svg>
}
function EcommerceIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 7h15l-1.5 7.5H7L5 4H3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="18.5" r="1.1" fill="currentColor" strokeWidth="0" /><circle cx="16" cy="18.5" r="1.1" fill="currentColor" strokeWidth="0" /></svg>
}
function EdtechIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="m4 7 8-3 8 3-8 3-8-3Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 9.5v5.2c0 1.1 2.3 2.3 5 2.3s5-1.2 5-2.3V9.5" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

const iconMap: Record<IndustryIcon, ComponentType<IconProps>> = {
  fintech: FintechIcon,
  healthcare: HealthcareIcon,
  ecommerce: EcommerceIcon,
  edtech: EdtechIcon,
}

export function IndustriesSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Industries We Serve" title="Built for regulated, fast-moving, and digitally ambitious industries." description="Our experience spans sectors where reliability, scale, and user trust matter as much as the technology itself." centered />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon]
            return (
              <motion.article key={industry.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.7rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_55px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_55px_rgba(2,11,20,0.22)]">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-500/20 via-sky-400/16 to-violet-500/18 text-brand-700 dark:border-white/10 dark:from-brand-500/26 dark:via-sky-400/16 dark:to-violet-500/18 dark:text-brand-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{industry.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
