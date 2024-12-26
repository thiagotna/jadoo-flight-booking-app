import { StepCard } from '@/app/components/StepsCards/StepCard'
import RegularList from '@/app/components/RegularList'

const steps = [
  {
    icon: '/images/destination-icon.svg',
    stepName: 'Choose Destination',
    stepDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: '/images/payment-icon.svg',
    stepName: 'Make Payment',
    stepDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    icon: '/images/airport-transfer.svg',
    stepName: 'Reach Airport on Selected Date',
    stepDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
]

export default function StepsCards() {
  return (
    <ul className="flex flex-col space-y-[4.8rem]">
      <RegularList items={steps} itemComponent={StepCard} />
    </ul>
  )
}
