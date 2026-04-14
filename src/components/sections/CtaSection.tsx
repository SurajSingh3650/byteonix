import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PopupButton, useCalendlyEventListener } from 'react-calendly'
import { Container } from '../layout/Container'

const calendlyUrl = 'https://calendly.com/suraj27singh2003/30min'

const trustPoints = ['No commitment required', 'Instant confirmation', '30-min expert session']

export function CtaSection() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  useEffect(() => {
    setRootElement(document.getElementById('root'))
  }, [])

  useCalendlyEventListener({
    onEventScheduled: () => {
      setBookingConfirmed(true)

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('byteonix:consultation-booked', {
            detail: {
              source: 'cta-section',
              calendlyUrl,
            },
          }),
        )
      }
    },
  })

  const calendlyPrefill = useMemo(
    () => ({
      customAnswers: {
        a1: 'Website consultation request',
      },
    }),
    [],
  )

  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2.3rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(241,245,249,0.94),rgba(236,242,248,0.96))] px-8 py-16 text-center shadow-[0_34px_110px_rgba(148,163,184,0.16)] sm:px-12 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(8,15,26,0.96),rgba(12,20,34,0.94),rgba(15,23,42,0.96))] dark:shadow-[0_34px_110px_rgba(2,11,20,0.34)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.08),transparent_30%)]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
              Consultation Booking
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Book Free Consultation
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              Schedule a focused 30-minute session to discuss product strategy,
              architecture, delivery planning, and the next practical step for your
              team.
            </p>

            <div className="mt-10 flex justify-center">
              {rootElement ? (
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.99 }}>
                  <PopupButton
                    url={calendlyUrl}
                    rootElement={rootElement}
                    text="Book Free Consultation"
                    className="inline-flex items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(15,23,42,0.14)] transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '1578e5',
                      textColor: '0f172a',
                    }}
                    prefill={calendlyPrefill}
                    iframeTitle="Free Consultation – 30 mins"
                  />
                </motion.div>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-wait items-center justify-center rounded-full border border-slate-300 bg-slate-200 px-8 py-4 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-400"
                >
                  Loading scheduler...
                </button>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              {trustPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  {point}
                </span>
              ))}
            </div>

            {bookingConfirmed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto mt-6 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                Your consultation has been scheduled. A confirmation email and calendar
                invite will be sent automatically through Calendly.
              </motion.p>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
