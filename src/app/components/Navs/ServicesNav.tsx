import { ServiceCategoryCard } from '@/app/components/ServiceCategoryCard'
import RegularList from '../RegularList'

const serviceCardItems = [
  {
    icon: '/images/satelite-icon.svg',
    iconWidth: 92,
    iconHeight: 78,
    name: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: '/images/plane-icon.svg',
    iconWidth: 112,
    iconHeight: 79,
    name: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
  },
  {
    icon: '/images/mic-icon.svg',
    iconWidth: 67,
    iconHeight: 75,
    name: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: '/images/gear-icon.svg',
    iconWidth: 77,
    iconHeight: 66,
    name: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
]

export default function ServicesNav() {
  return (
    <nav className="services-nav">
      <ul className="flex justify-center items-start gap-x-[5.5rem]">
        <RegularList
          items={serviceCardItems}
          itemComponent={ServiceCategoryCard}
        />
      </ul>
    </nav>
  )
}
