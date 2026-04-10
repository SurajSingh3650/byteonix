type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`.trim()}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-200">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
