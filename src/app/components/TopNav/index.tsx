import { NavItem } from '@/app/components/TopNav/NavItem'
import RegularList from '../RegularList'

const navItems = [
  { href: '/destinations', linkText: 'Destinations' },
  { href: '/hotels', linkText: 'Hotels' },
  { href: '/flights', linkText: 'Flights' },
  { href: '/bookings', linkText: 'Bookings' },
]

export default function TopNav() {
  return (
    <nav>
      <ul>
        <RegularList
          items={navItems}
          resourceName="linkAndText" // prop name in NavItem
          itemComponent={NavItem}
        />
      </ul>
    </nav>
  )
}
