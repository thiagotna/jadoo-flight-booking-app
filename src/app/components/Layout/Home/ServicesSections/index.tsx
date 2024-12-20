import ServicesNav from '@/app/components/Navs/ServicesNav'
import { Section } from '@/app/components/Section'
import poppins from '@/app/fonts/poppins'
import volkhov from '@/app/fonts/volkhov'

export function ServicesSection(): JSX.Element {
  return (
    <Section
      sectionClasses="mt-[9.7rem] pb-[6.1rem]"
      containerClasses="container mx-auto max-w-[1200px] bg-[url('/images/section-decorator.svg')] bg-contain bg-no-repeat bg-right-top bg-[length:15.3rem]"
    >
      <h2
        className={`${volkhov.className} mb-[11rem] pt-[1rem] text-center text-[5rem] font-[600]`}
      >
        <small
          className={`${poppins.className} block text-[.36em] font-normal`}
        >
          Top Selling
        </small>
        Top Destinations
      </h2>
      <ServicesNav />
    </Section>
  )
}
