import PartiallyApplied from '@/app/components/PartiallyApplied'
import Button from './Button'
import Link from 'next/link'

const classNames = `
  bg-secondary
  px-[2.2rem]
  py-[.9rem]
  rounded-[.5rem]
  hover:bg-primary
  min-w-[17rem]
  text-white
  shadow-[0_20px_35px_0_rgba(241,165,1,.15)]
  duration-300
  ease-in-out
`

const Cta = PartiallyApplied(Button, { classNames, text: 'Find out more' })

export default function HeroCta() {
  return (
    <Link href="#">
      <Cta />
    </Link>
  )
}
