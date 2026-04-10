import { motion } from 'framer-motion'
import { caseStudies } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Case Studies" title="Proof that strategy, speed, and engineering quality can move metrics that matter." description="A few examples of how Byteonix helps organizations solve real product and operations challenges with measurable outcomes." />
        <div className="mt-14 space-y-6">
          {caseStudies.map((study, index) => (
            <motion.article key={study.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,245,249,0.96))] p-7 shadow-[0_24px_75px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(10,17,28,0.9),rgba(16,19,35,0.92))] dark:shadow-[0_24px_75px_rgba(2,11,20,0.3)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">{study.industry}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{study.title}</h3>
                </div>
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">Trust-building outcome</span>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                <div className="rounded-[1.3rem] border border-slate-200/80 bg-white/85 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Problem</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{study.problem}</p>
                </div>
                <div className="rounded-[1.3rem] border border-slate-200/80 bg-white/85 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Solution</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{study.solution}</p>
                </div>
                <div className="rounded-[1.3rem] border border-brand-300/35 bg-[linear-gradient(180deg,rgba(59,130,246,0.12),rgba(124,58,237,0.1))] p-5 dark:border-brand-300/25 dark:bg-[linear-gradient(180deg,rgba(59,130,246,0.14),rgba(124,58,237,0.12))]">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-700 dark:text-brand-100">Result</p>
                  <p className="mt-4 text-base font-semibold leading-8 text-slate-950 dark:text-white">{study.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
