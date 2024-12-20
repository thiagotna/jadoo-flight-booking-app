import Link from 'next/link'
import PartiallyApplied from '@/app/components/PartiallyApplied'
import Button from './Button'

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

const SignIn = PartiallyApplied(Button, { classNames, text: 'Sign In' })

export default function SignInBtn() {
  return (
    <Link href="/signin">
      <SignIn />
    </Link>
  )
}
