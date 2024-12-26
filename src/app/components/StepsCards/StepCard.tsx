import Image from 'next/image'

interface StepCardProps {
  icon: string
  stepName: string
  stepDescription: string
}

export function StepCard(StepCardProps: StepCardProps): JSX.Element {
  const { icon, stepName, stepDescription } = StepCardProps
  return (
    <li className="step-card max-w-[42rem]">
      <figure className="flex flex-row justify-start items-start space-x-[2.1rem]">
        <Image
          className="w-auto"
          src={icon}
          alt={stepName}
          width={47}
          height={48}
        />
        <figcaption className="text-[1.6rem]">
          <h4 className="font-[700]">{stepName}</h4>
          <p className="leading-[1.992rem]">{stepDescription}</p>
        </figcaption>
      </figure>
    </li>
  )
}
