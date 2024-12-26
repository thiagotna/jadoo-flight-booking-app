import { NavItem } from '@/app/components/Navs/NavItem'
import RegularList from '@/app/components/RegularList'

const navItems = [
  { href: '/destinations', linkText: 'Destinations' },
  { href: '/hotels', linkText: 'Hotels' },
  { href: '/flights', linkText: 'Flights' },
  { href: '/bookings', linkText: 'Bookings' },
]

export default function TopNav() {
  return (
    <nav className="top-nav">
      <ul className="flex space-x-[5.5rem]">
        <RegularList items={navItems} itemComponent={NavItem} />
      </ul>
    </nav>
  )
}
