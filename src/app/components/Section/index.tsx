import ComponentElement from 'react'

interface SectionProps {
  sectionClasses: string
  containerWidth: string
  children: ComponentElement.ReactNode
}

export function Section({
  sectionClasses,
  containerWidth,
  children,
}: SectionProps): JSX.Element {
  return (
    <section className={`${sectionClasses}`}>
      <div className={`container mx-auto ${containerWidth}`}>{children}</div>
    </section>
  )
}
