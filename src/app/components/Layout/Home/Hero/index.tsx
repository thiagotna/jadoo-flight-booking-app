import { Section } from '@/app/components/Section'
import volkhov from '@/app/fonts/volkhov'
import HeroCta from '@/app/components/Buttons/HeroCta'
import Image from 'next/image'
import HeroPlayBtn from '@/app/components/Buttons/HeroPlayBtn'

export function Hero(): JSX.Element {
  return (
    <Section
      sectionClasses="
      hero-section
      pt-[11.35rem]       
      pb-[9.7rem] 
      bg-[url('/images/hero-bg.png')]
      bg-no-repeat
      bg-right-top
      bg-[length:40.5%]"
      containerClasses="container mx-auto max-w-[120rem]"
    >
      <div className="flex flex-row items-center justify-center relative">
        <div className="columns-[64.5rem] pt-[11.2rem] pl-[1.7rem]">
          <h3 className="text-primary uppercase font-bold text-[2rem] mb-[2.4rem]">
            Best Destinations around the world
          </h3>
          <h1
            className={`${volkhov.className} font-bold text-[8.4rem] leading-[8.9rem] tracking-[-4%] text-purple`}
          >
            Travel, enjoy and live a new and full life
          </h1>
          <p className="mt-[3.6rem] mb-[3.4rem] text-[1.6rem] leading-[3rem]">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex flex-row items-center justify-start gap-[4.4rem]">
            <HeroCta />
            <HeroPlayBtn />
          </div>
        </div>
        <div className="columns-[55.5rem]">
          <Image
            src="/images/traveler.png"
            className="absolute top-[0] right-[0]"
            width={756}
            height={764}
            alt="Fun Traveler getting ready to travel"
            priority={true}
            loading="eager"
          />
        </div>
      </div>
    </Section>
  )
}
