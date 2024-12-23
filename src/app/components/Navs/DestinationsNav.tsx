import { DestinationCard } from '../DestinarionCard'
import RegularList from '../RegularList'

const destinationCardItems = [
  {
    image: '/images/rome.png',
    location: 'Rome, Italy',
    price: '$5,42k',
    tripLength: '10 days trip',
  },
  {
    image: '/images/london.png',
    location: 'London, UK',
    price: '$4,2k',
    tripLength: '12 days trip',
  },
  {
    image: '/images/europe.png',
    location: 'Full Europe',
    price: '$15k',
    tripLength: '28 days trip',
  },
]

export default function DetinationsNav() {
  return (
    <nav className="destination-nav">
      <ul className="flex justify-start items-start gap-x-[3.5rem]">
        <RegularList
          items={destinationCardItems}
          itemComponent={DestinationCard}
        />
      </ul>
    </nav>
  )
}
