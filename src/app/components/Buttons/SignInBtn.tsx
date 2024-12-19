import Link from 'next/link'

const classNames = `
  ml-[5.2rem]
  mr-[4.2rem]
  bg-transparent
  px-[2.2rem]
  py-[.9rem]
  rounded-[.5rem]
  border
  border-foreground
  hover:bg-secondary
  duration-300
  ease-in-out
`

export default function SignInBtn() {
  return (
    <Link className={classNames} href="/signin">
      Sign In
    </Link>
  )
}
