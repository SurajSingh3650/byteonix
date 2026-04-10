import { motion } from 'framer-motion'
import logo from '../../assets/images/byteonix-logo.png'
import { clientLogos } from '../../data/company'
import { Container } from '../layout/Container'

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_85%_16%,rgba(139,92,246,0.14),transparent_24%),linear-gradient(135deg,#f8fbff_0%,#edf4fb_42%,#eef0ff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_28%),radial-gradient(circle_at_85%_16%,rgba(139,92,246,0.24),transparent_24%),linear-gradient(135deg,#07111d_0%,#0b1730_42%,#180b30_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/30" />
      <div className="absolute inset-x-0 top-14 -z-10 mx-auto h-80 w-[52rem] max-w-full rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),rgba(99,102,241,0.08),transparent_72%)] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.16),rgba(99,102,241,0.12),transparent_72%)] blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="inline-flex rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-700 shadow-lg shadow-slate-200/80 backdrop-blur dark:border-white/12 dark:bg-white/6 dark:text-brand-100 dark:shadow-slate-950/30">
              Trusted by startups & enterprises
            </p>

            <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              We help startups and enterprises build scalable digital products 3x
              faster.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              Byteonix designs and delivers secure websites, cloud-ready platforms,
              and custom software that reduce delivery friction, improve product
              quality, and create room for growth.
            </p>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-brand-700/85 dark:text-brand-100/85">
              Scalable systems. Faster execution. Secure growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-sky-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition hover:shadow-[0_20px_50px_rgba(124,58,237,0.28)]"
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/85 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/70 backdrop-blur transition hover:border-brand-300/35 hover:bg-white dark:border-white/12 dark:bg-white/6 dark:text-slate-100 dark:shadow-slate-950/20 dark:hover:border-brand-200/35 dark:hover:bg-white/10"
              >
                View Case Studies
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Trusted by growing startups & digital businesses
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Selected teams we support
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.05 }}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[38rem]"
          >
            <div className="absolute -left-3 top-14 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_28px_90px_rgba(148,163,184,0.22)] backdrop-blur-2xl dark:border-white/12 dark:bg-white/7 dark:shadow-[0_28px_90px_rgba(2,11,20,0.45)]"
            >
              <div className="rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.96))] p-5 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(8,15,30,0.95),rgba(20,17,39,0.92))]">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Byteonix brand mark"
                      className="h-12 w-12 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                        Byteonix Growth OS
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Product delivery. Cloud systems. Business clarity.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.45rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(23,120,229,0.12),rgba(123,97,255,0.1))] p-5 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(23,120,229,0.2),rgba(123,97,255,0.14))]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.28em] text-brand-700 dark:text-brand-100">
                        Delivery Velocity
                      </p>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">3x faster</p>
                    </div>
                    <div className="mt-6 rounded-[1rem] border border-slate-200/80 bg-white/70 p-4 dark:border-white/8 dark:bg-slate-950/45">
                      <div className="grid grid-cols-7 items-end gap-2">
                        {[32, 46, 40, 58, 66, 84, 78].map((height) => (
                          <motion.span
                            key={height}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}px` }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="rounded-full bg-gradient-to-t from-brand-500 via-sky-400 to-violet-400"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/6">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          Time To Launch
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">-42%</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/6">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          Delivery Confidence
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">98%</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/6">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                        Security
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                        Zero Trust
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/6">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                        Infrastructure
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                        Cloud-ready
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/6">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                        Product Ops
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                        AI-assisted
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
