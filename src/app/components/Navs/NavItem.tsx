import Link from 'next/link'

interface LinkAndText {
  href: string
  linkText: string
}

export function NavItem(linkAndText: LinkAndText): JSX.Element {
  const { href, linkText } = linkAndText
  return (
    <li>
      <Link href={href}>{linkText}</Link>
    </li>
  )
}
