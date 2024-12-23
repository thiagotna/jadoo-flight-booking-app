import ServicesNav from '@/app/components/Navs/ServicesNav'
import { Section } from '@/app/components/Section'
import poppins from '@/app/fonts/poppins'
import volkhov from '@/app/fonts/volkhov'

export function ServicesSection(): JSX.Element {
  return (
    <Section
      sectionClasses="services-section mt-[9.7rem] pb-[6.1rem]"
      containerClasses="container mx-auto max-w-[122.8rem] bg-contain bg-no-repeat bg-[right_-6.3rem_top] bg-[length:153px]"
    >
      <h2
        className={`${volkhov.className} mb-[11rem] pt-[1rem] text-center text-[5rem] font-[600]`}
      >
        <small
          className={`${poppins.className} block text-[.36em] font-normal`}
        >
          Category
        </small>
        We Offer Best Services
      </h2>
      <ServicesNav />
    </Section>
  )
}
