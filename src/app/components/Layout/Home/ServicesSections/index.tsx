import { Section } from '@/app/components/Section'
import poppins from '@/app/fonts/poppins'
import volkhov from '@/app/fonts/volkhov'

export function ServicesSection(): JSX.Element {
  return (
    <Section sectionClasses="pt-[9.7rem]" containerWidth="max-w-[1200px]">
      <h2 className={`${volkhov.className} text-center text-[5rem] font-[600]`}>
        <small
          className={`${poppins.className} block text-[.36em] font-normal`}
        >
          Top Selling
        </small>
        Top Destinations
      </h2>
    </Section>
  )
}
