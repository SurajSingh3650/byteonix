import { AboutSection } from '../components/sections/AboutSection'
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection'
import { CtaSection } from '../components/sections/CtaSection'
import { HeroSection } from '../components/sections/HeroSection'
import { IndustriesSection } from '../components/sections/IndustriesSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { StatsSection } from '../components/sections/StatsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { WhyChooseSection } from '../components/sections/WhyChooseSection'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
