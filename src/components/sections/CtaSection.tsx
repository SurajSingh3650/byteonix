import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

export function CtaSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="relative overflow-hidden rounded-[2.3rem] border border-brand-200/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(233,244,255,0.96),rgba(239,233,255,0.96))] px-8 py-16 text-center shadow-[0_34px_110px_rgba(148,163,184,0.22)] sm:px-12 dark:border-white/12 dark:bg-[linear-gradient(135deg,rgba(16,78,189,0.94),rgba(59,130,246,0.82),rgba(109,40,217,0.88))] dark:shadow-[0_34px_110px_rgba(59,130,246,0.26)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_28%)]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl dark:bg-white/12" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700/80 dark:text-white/80">High Conversion CTA</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">Book Free Consultation</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 dark:text-white/85 sm:text-lg">
              Get expert guidance on product strategy, architecture, and delivery so your team can move faster with more confidence.
            </p>
            <motion.a href="#contact" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.99 }} className="mx-auto mt-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_38px_rgba(15,23,42,0.16)] transition hover:shadow-[0_0_48px_rgba(15,23,42,0.24)] dark:bg-white dark:text-slate-950 dark:shadow-[0_0_38px_rgba(255,255,255,0.28)] dark:hover:shadow-[0_0_48px_rgba(255,255,255,0.42)]">
              Book Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
