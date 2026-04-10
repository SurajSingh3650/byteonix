import { motion } from 'framer-motion'
import { testimonials } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'
import { Container } from '../layout/Container'

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What clients say after working with Byteonix." description="Real product and operations leaders trust us because we combine strategic clarity with reliable execution." centered />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article key={`${testimonial.name}-${testimonial.company}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_20px_65px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_65px_rgba(2,11,20,0.22)]">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-8 border-t border-slate-200/80 pt-5 dark:border-white/10">
                <p className="text-base font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
