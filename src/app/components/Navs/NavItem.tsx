import Link from 'next/link'

interface NavItemProps {
  href: string
  linkText: string
}

export function NavItem(navItemProps: NavItemProps): JSX.Element {
  const { href, linkText } = navItemProps
  return (
    <li>
      <Link href={href}>{linkText}</Link>
    </li>
  )
}
