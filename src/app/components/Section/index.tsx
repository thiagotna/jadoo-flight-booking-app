import ComponentElement from 'react'

interface SectionProps {
  sectionClasses: string
  containerClasses: string
  children: ComponentElement.ReactNode
}

export function Section({
  sectionClasses,
  containerClasses,
  children,
}: SectionProps): JSX.Element {
  return (
    <section className={`${sectionClasses}`}>
      <div className={containerClasses}>{children}</div>
    </section>
  )
}
