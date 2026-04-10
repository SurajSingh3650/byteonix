import { motion } from 'framer-motion'
import { aboutStory } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <SectionHeading eyebrow="About Byteonix" title="Human-centered leadership with enterprise-level execution." description={aboutStory.founderStory} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="space-y-6">
            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_65px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_65px_rgba(2,11,20,0.22)]">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Mission</p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{aboutStory.mission}</p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_65px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_65px_rgba(2,11,20,0.22)]">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Vision</p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{aboutStory.vision}</p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_65px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_65px_rgba(2,11,20,0.22)]">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Why teams choose us</p>
              <div className="mt-5 space-y-4">
                {aboutStory.differentiators.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-400 dark:bg-brand-300" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
