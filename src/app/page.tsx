import { Hero } from './components/Layout/Home/Hero'
import { ServicesSection } from './components/Layout/Home/ServicesSections'
import { TopDestinationsSection } from './components/Layout/Home/DestinationsSection'
import { StepsSection } from './components/Layout/Home/StepsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TopDestinationsSection />
      <StepsSection />
    </>
  )
}
