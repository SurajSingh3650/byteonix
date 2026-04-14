import { useState } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

type StudyCardKey = 'problem' | 'solution' | 'result'

type StudyPanel = {
  key: StudyCardKey
  label: string
  content: string
}

function CaseStudyInteractivePanels({
  problem,
  solution,
  result,
}: {
  problem: string
  solution: string
  result: string
}) {
  const [hovered, setHovered] = useState<StudyCardKey>('result')

  const panels: StudyPanel[] = [
    { key: 'problem', label: 'Problem', content: problem },
    { key: 'solution', label: 'Solution', content: solution },
    { key: 'result', label: 'Result', content: result },
  ]

  return (
    <div
      className="mt-8 grid gap-5 lg:grid-cols-3"
      onMouseLeave={() => setHovered('result')}
    >
      {panels.map((panel) => {
        const isActive = hovered === panel.key
        const hasActive = hovered !== null
        const isInactive = hasActive && !isActive
        const isResult = panel.key === 'result'

        return (
          <motion.button
            key={panel.key}
            type="button"
            onMouseEnter={() => setHovered(panel.key)}
            onFocus={() => setHovered(panel.key)}
            onClick={() => setHovered(panel.key)}
            whileHover={{ y: -6 }}
            animate={{
              scale: isActive ? 1.05 : 1,
              y: isActive ? -6 : 0,
              opacity: isInactive ? 0.5 : 1,
              filter: isInactive ? 'blur(1px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex min-h-[15rem] flex-col rounded-[1.35rem] border p-5 text-left outline-none transition-[border-color,background-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-brand-400/60 ${
              isActive
                ? 'border-brand-300/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.96))] shadow-[0_22px_55px_rgba(37,99,235,0.14)] dark:border-brand-300/35 dark:bg-[linear-gradient(180deg,rgba(20,31,56,0.96),rgba(17,24,39,0.96))] dark:shadow-[0_22px_55px_rgba(8,47,73,0.34)]'
                : 'border-slate-200/80 bg-white/85 shadow-none dark:border-white/10 dark:bg-white/5'
            }`}
          >
            <p
              className={`text-xs uppercase tracking-[0.24em] ${
                isActive
                  ? 'text-brand-700 dark:text-brand-100'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {panel.label}
            </p>
            <p
              className={`mt-4 ${
                isResult
                  ? 'text-base font-semibold leading-8'
                  : 'text-sm leading-7'
              } ${
                isActive
                  ? 'text-slate-950 dark:text-white'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {panel.content}
            </p>
          </motion.button>
        )
      })}
    </div>
  )
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Proof that strategy, speed, and engineering quality can move metrics that matter."
          description="A few examples of how Byteonix helps organizations solve real product and operations challenges with measurable outcomes."
        />

        <div className="mt-14 space-y-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,245,249,0.96))] p-7 shadow-[0_24px_75px_rgba(148,163,184,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(10,17,28,0.9),rgba(16,19,35,0.92))] dark:shadow-[0_24px_75px_rgba(2,11,20,0.3)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">
                    {study.industry}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                    {study.title}
                  </h3>
                </div>
                <span className="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  Trust-building outcome
                </span>
              </div>

              <CaseStudyInteractivePanels
                problem={study.problem}
                solution={study.solution}
                result={study.result}
              />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
