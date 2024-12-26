import { Section } from '@/app/components/Section'
import StepsCards from '@/app/components/StepsCards'
import poppins from '@/app/fonts/poppins'
import volkhov from '@/app/fonts/volkhov'

export function StepsSection(): JSX.Element {
  return (
    <Section
      sectionClasses="steps-section"
      containerClasses="container mx-auto"
    >
      <div className="flex flex-row items-center justify-center relative">
        <div className="columns-[51.1rem] pt-[12.5rem]">
          <h2
            className={`${volkhov.className} mb-[3.1rem] text-[5rem] font-[700]`}
          >
            <small
              className={`${poppins.className} block text-[.36em] font-[600] text-grayDarker`}
            >
              Easy and Fast
            </small>
            <span className="block leading-[6.45rem]">
              Book your next trip in 3 easy steps
            </span>
          </h2>
          <StepsCards />
        </div>
        <div className="columns-[48.5rem] pt-[12.5rem]"></div>
      </div>
    </Section>
  )
}
