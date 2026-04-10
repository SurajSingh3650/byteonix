import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../../data/company'
import { Container } from '../layout/Container'

type CounterProps = {
  value: number
  suffix: string
  duration?: number
}

function AnimatedCounter({ value, suffix, duration = 1600 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || hasStarted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasStarted(true)
        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let frame = 0
    let startTime = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = window.requestAnimationFrame(step)
    }

    frame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(frame)
  }, [duration, hasStarted, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 w-[42rem] max-w-full rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),rgba(139,92,246,0.08),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.18),rgba(139,92,246,0.08),transparent_70%)] blur-3xl" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(241,245,249,0.96))] shadow-[0_26px_90px_rgba(148,163,184,0.22)] backdrop-blur-2xl dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(14,24,41,0.88),rgba(20,14,40,0.82))] dark:shadow-[0_26px_90px_rgba(2,11,20,0.38)]"
        >
          <div className="border-b border-slate-200/80 px-8 py-8 text-center dark:border-white/10 sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-200">
              Our Impact
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
              Numbers that reflect trust, momentum, and delivery.
            </h2>
          </div>

          <div className="grid gap-px bg-slate-200/80 dark:bg-white/10 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative bg-white/80 px-8 py-10 text-center dark:bg-slate-950/55"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/30" />
                <p className="bg-gradient-to-r from-brand-600 via-sky-500 to-violet-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent dark:from-brand-100 dark:via-sky-300 dark:to-violet-300 sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
