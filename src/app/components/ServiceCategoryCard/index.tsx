import Image from 'next/image'

interface ServiceCategoryCardProps {
  icon: string
  iconWidth: number
  iconHeight: number
  name: string
  description: string
}

export function ServiceCategoryCard(
  serviceCategoryCardProps: ServiceCategoryCardProps,
): JSX.Element {
  const { icon, iconWidth, iconHeight, name, description } =
    serviceCategoryCardProps
  return (
    <li className="service-category-card h-auto basis-1/4">
      <figure className="flex flex-col items-center justify-center">
        <Image src={icon} alt={name} width={iconWidth} height={iconHeight} />
        <figcaption className="text-center">
          <h3 className="mt-[2.9rem] mb-[1.5rem] font-[600] text-[2rem]">
            {name}
          </h3>
          <p>{description}</p>
        </figcaption>
      </figure>
    </li>
  )
}
