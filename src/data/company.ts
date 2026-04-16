export type ServiceIcon = 'web' | 'app' | 'cloud' | 'software'

export type Service = {
  title: string
  description: string
  technologies: string[]
  industryUseCase: string
  cta: string
  icon: ServiceIcon
}

export type AdvantageIcon = 'trust' | 'scale' | 'tech' | 'speed'

export type Advantage = {
  title: string
  description: string
  icon: AdvantageIcon
}

export type Stat = {
  value: number
  suffix: string
  label: string
}

export type IndustryIcon = 'fintech' | 'healthcare' | 'ecommerce' | 'edtech'

export type Industry = {
  title: string
  description: string
  icon: IndustryIcon
}

export type CaseStudy = {
  title: string
  industry: string
  problem: string
  solution: string
  result: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export type ProcessStepIcon = 'discovery' | 'planning' | 'development' | 'delivery'

export type ProcessStep = {
  title: string
  description: string
  icon: ProcessStepIcon
}

export const company = {
  name: 'Byteonix',
  tagline: 'Your Trusted Technology Partner',
  email: 'byteonixsupport@byteonix.in',
  phone: '+91 78058 29124',
  location: 'bangalore ,India',
  address: 'Blueberry Appartment Near Nagawara Bridge, Thanisandra Main Road, HBR Layout 5th Block, Bangalore.',
}

export const trustIndustries = ['SaaS', 'FinTech', 'E-commerce', 'Healthcare', 'Enterprise']

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Conversion-focused websites and enterprise web platforms that help brands launch faster and grow with confidence.',
    technologies: ['React', 'Next.js', 'Tailwind', 'Node.js'],
    industryUseCase: 'Ideal for SaaS, B2B, and digital-first brands needing high-performing web experiences.',
    cta: 'Explore Service',
    icon: 'web',
  },
  {
    title: 'App Development',
    description:
      'Reliable mobile and cross-platform apps designed to improve customer experience, retention, and product adoption.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase'],
    industryUseCase: 'Best for startups and enterprises launching customer apps, partner tools, or internal mobile workflows.',
    cta: 'Start a Project',
    icon: 'app',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Cloud-ready infrastructure and DevOps systems built for speed, resilience, and secure long-term scalability.',
    technologies: ['AWS', 'Azure', 'Docker', 'CI/CD'],
    industryUseCase: 'Built for platforms handling growth, traffic spikes, multi-team deployments, and compliance-sensitive workloads.',
    cta: 'Explore Service',
    icon: 'cloud',
  },
  {
    title: 'Custom Software',
    description:
      'Tailored software systems that streamline operations, unify data, and unlock measurable efficiency across teams.',
    technologies: ['MERN', 'PostgreSQL', 'Python', 'REST APIs'],
    industryUseCase: 'Great for companies replacing spreadsheets, disconnected tools, or legacy internal systems.',
    cta: 'Start a Project',
    icon: 'software',
  },
]

export const advantages: Advantage[] = [
  {
    title: 'Trust',
    description:
      'Senior-level execution, clear communication, and dependable delivery from first workshop to production launch.',
    icon: 'trust',
  },
  {
    title: 'Scalable',
    description:
      'Architecture decisions are made for long-term growth, not short-term patches, so products can scale without rework.',
    icon: 'scale',
  },
  {
    title: 'Modern Tech',
    description:
      'We use current frameworks, cloud-ready infrastructure, and pragmatic engineering patterns to keep teams fast.',
    icon: 'tech',
  },
  {
    title: 'Fast Delivery',
    description:
      'Lean process, strong product thinking, and execution discipline help us reduce time-to-launch without cutting quality.',
    icon: 'speed',
  },
]

export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Clients Supported' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

export const industries: Industry[] = [
  {
    title: 'FinTech',
    description:
      'Secure product experiences, transaction workflows, and compliance-aware platforms for modern finance teams.',
    icon: 'fintech',
  },
  {
    title: 'Healthcare',
    description:
      'Reliable systems for patient-facing experiences, operations, and data-sensitive digital transformation.',
    icon: 'healthcare',
  },
  {
    title: 'E-commerce',
    description:
      'Scalable storefronts, admin systems, and conversion-focused digital journeys for growth-stage commerce brands.',
    icon: 'ecommerce',
  },
  {
    title: 'EdTech',
    description:
      'Engaging learning platforms, student dashboards, and digital ecosystems that scale across users and content.',
    icon: 'edtech',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'FinPulse Lending Platform',
    industry: 'FinTech',
    problem:
      'A fast-growing lending startup struggled with fragmented workflows and slow onboarding across multiple manual systems.',
    solution:
      'Byteonix designed a unified customer portal, internal review dashboard, and secure cloud-based workflow engine.',
    result: 'Reduced onboarding time by 62% and improved team productivity by 3.1x within one quarter.',
  },
  {
    title: 'MediLayer Operations Suite',
    industry: 'Healthcare',
    problem:
      'A healthcare operations team needed a modern platform to manage appointments, reports, and operational visibility.',
    solution:
      'We built a responsive operations dashboard with role-based access, reporting tools, and performance monitoring.',
    result: 'Cut admin coordination effort by 45% and improved reporting turnaround from days to minutes.',
  },
  {
    title: 'ShopGrid Commerce Rebuild',
    industry: 'E-commerce',
    problem:
      'Legacy storefront performance issues were hurting conversions and slowing campaign launches during peak growth.',
    solution:
      'Byteonix rebuilt the web experience with a modern frontend, optimized CMS flow, and cloud-ready deployment pipeline.',
    result: 'Improved page speed by 58% and increased checkout conversion by 27% in the first release cycle.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Byteonix brought clarity to a complex product roadmap and delivered a platform that felt enterprise-ready from day one.',
    name: 'Rohan Mehta',
    role: 'Founder',
    company: 'FinPulse',
  },
  {
    quote:
      'Their team thinks beyond code. They improved our architecture, sped up delivery, and made our product far easier to scale.',
    name: 'Ananya Roy',
    role: 'Head of Product',
    company: 'MediLayer',
  },
  {
    quote:
      'What stood out most was the combination of speed, structure, and trust. We always knew what was being built and why.',
    name: 'David Clarke',
    role: 'Operations Director',
    company: 'ShopGrid',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description:
      'We align on business goals, user needs, current bottlenecks, and the technical landscape before designing the solution.',
    icon: 'discovery',
  },
  {
    title: 'Planning',
    description:
      'Scope, architecture, milestones, and delivery priorities are mapped into a practical plan the whole team can trust.',
    icon: 'planning',
  },
  {
    title: 'Development',
    description:
      'Design and engineering move in sync through iterative delivery, rapid feedback loops, and quality-first execution.',
    icon: 'development',
  },
  {
    title: 'Delivery',
    description:
      'We launch confidently with testing, deployment support, documentation, and a roadmap for long-term evolution.',
    icon: 'delivery',
  },
]

export const aboutStory = {
  founderStory:
    'Byteonix was created with a simple belief: ambitious teams deserve technology partners who combine strategic thinking, modern engineering, and real accountability. What began as a mission to help businesses avoid slow, brittle digital systems has grown into a studio focused on building dependable digital products for serious growth.',
  mission:
    'To help startups and enterprises launch secure, scalable digital products faster with thoughtful design, modern engineering, and measurable business outcomes.',
  vision:
    'To become the trusted digital execution partner for growth-stage companies that want product-grade experiences with enterprise-level reliability.',
  differentiators: [
    'Business-first product thinking, not just feature delivery',
    'Modern cloud-ready architecture built for long-term scale',
    'Senior-level collaboration with fast, transparent execution',
  ],
}

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]
