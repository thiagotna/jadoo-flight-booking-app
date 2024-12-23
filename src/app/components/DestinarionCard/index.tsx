import Image from 'next/image'

interface DestinationCardProps {
  image: string
  location: string
  price: string
  tripLength: string
}

export function DestinationCard(
  destinarionCardProps: DestinationCardProps,
): JSX.Element {
  const { image, location, price, tripLength } = destinarionCardProps
  return (
    <li className="destination-card relative h-auto basis-1/3 lg:max-w-[31.4rem] ">
      <figure className="relative rounded-[2.2rem] shadow-[0_20px_13px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-center   overflow-hidden">
        <Image
          className="w-full"
          src={image}
          alt={location}
          width={474}
          height={639}
        />
        <figcaption className="absolute bottom-0 left-0 p-[2rem_2.7rem_4.24rem] bg-white w-full h-[13rem]">
          <h3 className="text-[1.8rem] text-grayDark flex justify-between items-center mb-[1.9rem]">
            <span>{location}</span>
            <span>{price}</span>
          </h3>
          <p className="flex items-center">{tripLength}</p>
        </figcaption>
      </figure>
    </li>
  )
}
