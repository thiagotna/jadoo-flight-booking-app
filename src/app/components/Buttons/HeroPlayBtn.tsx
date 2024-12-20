import PartiallyApplied from '@/app/components/PartiallyApplied'
import Button from './Button'
import Link from 'next/link'

const classNames = `
  duration-300
  ease-in-out
`

const PlayIcon = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="play-btb-icon bg-transparent rounded-[50%]"
    >
      <circle
        className="hover:fill-secondary duration-300 ease-in-out"
        cx="26"
        cy="26"
        r="26"
        fill="#DF6951"
      />
      <path d="M33 26L22 32.4952V19.5048L33 26Z" fill="white" />
    </svg>
  )
}

const Cta = PartiallyApplied(Button, { classNames, text: 'Play Demo' })

export default function HeroPlayBtn() {
  return (
    <Link
      href="#"
      className="hero-play-btn flex flex-row items-center justify-start gap-[2.1rem]"
    >
      <PlayIcon />
      <Cta />
    </Link>
  )
}
