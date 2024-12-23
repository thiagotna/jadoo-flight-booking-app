import { TopDestinationsSection } from './components/Layout/Home/DestinationsSection'
import { Hero } from './components/Layout/Home/Hero'
import { ServicesSection } from './components/Layout/Home/ServicesSections'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TopDestinationsSection />
    </>
  )
}
