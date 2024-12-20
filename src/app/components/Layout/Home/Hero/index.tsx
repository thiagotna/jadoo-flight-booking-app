import { Volkhov } from 'next/font/google'
import { Section } from '@/app/components/Section'
import HeroCta from '@/app/components/Buttons/HeroCta'
import Image from 'next/image'

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export function Hero(): JSX.Element {
  return (
    <Section
      sectionClasses="
      pt-[11.35rem]       
      pb-[9.7rem] 
      bg-[url('/images/hero-bg.png')]
      bg-no-repeat
      bg-right-top
      bg-[length:40.5%]"
      containerWidth="max-w-[120rem]"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="columns-[64.5rem] pl-[1.7rem]">
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
          <div className="flex flex-row items-center justify-start">
            <HeroCta />
          </div>
        </div>
        <div>
          <Image
            src="/images/traveler.png"
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
