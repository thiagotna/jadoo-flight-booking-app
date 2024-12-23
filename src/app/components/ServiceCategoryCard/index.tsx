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
    <li className="service-category-card h-auto basis-1/4 lg:max-w-[26.7rem] ">
      <figure className="rounded-[3.6rem] p-[4rem_3rem_4.5rem] bg-white md:hover:shadow-[0_20px_13px_0_rgba(0,0,0,0.02)] active:shadow-[0_20px_13px_0_rgba(0,0,0,0.02)] duration-300 ease-in-out flex flex-col items-center justify-center">
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
