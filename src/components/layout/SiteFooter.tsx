import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/images/byteonix-logo.png'
import { company, footerLegalLinks } from '../../data/company'
import { Container } from './Container'

type IconProps = { className?: string }

function InstagramIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" strokeWidth="1.8" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" strokeWidth="0" /></svg>
}
function LinkedinIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M7 9.5V19" strokeWidth="1.8" strokeLinecap="round" /><path d="M7 5.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill="currentColor" strokeWidth="0" /><path d="M12 19v-5.2c0-1.8 1.2-3 2.8-3s2.7 1.1 2.7 3.2V19" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 10v9" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
function XIcon({ className = '' }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}><path d="M4 4 20 20M20 4 4 20" strokeWidth="1.8" strokeLinecap="round" /></svg>
}

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks: Array<{ label: string; href: string; icon: ComponentType<IconProps> }> = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="relative border-t border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,251,255,0.96),rgba(238,244,251,0.98))] py-16 backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(5,13,21,0.95),rgba(8,13,26,0.98))]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/20" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.8fr_0.9fr_0.8fr]">
          <div className="max-w-sm">
            <a href="#home" className="group inline-flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 transition duration-300 group-hover:border-brand-300/35 group-hover:bg-white dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/8">
                <img src={logo} alt="Byteonix logo" className="h-12 w-12 rounded-xl object-cover" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">{company.name}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-brand-700/85 dark:text-brand-200/85">Your Trusted Technology Partner</p>
              </div>
            </a>
            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Byteonix helps modern businesses build secure, scalable digital products with product-grade design, cloud-ready systems, and fast execution.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Navigation</p>
            <nav className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <motion.a key={link.label} href={link.href} whileHover={{ x: 4 }} className="block text-sm text-slate-600 transition duration-300 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Contact</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <p>{company.address}</p>
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.location}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Social & Legal</p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} whileHover={{ y: -3, scale: 1.04 }} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 text-slate-700 transition duration-300 hover:border-brand-300/35 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white">
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-6 space-y-3">
              {footerLegalLinks.map((link) => (
                <a key={link.label} href={link.href} className="block text-sm text-slate-600 transition duration-300 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/80 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          <p>&copy; 2026 Byteonix. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
