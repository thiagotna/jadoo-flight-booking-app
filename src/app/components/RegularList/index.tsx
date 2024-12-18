import { ComponentType } from 'react'

interface RegularListProps<T> {
  items: T[]
  itemComponent: ComponentType<T>
}

const RegularList = <T extends Record<string, unknown>>({
  items,
  itemComponent: ItemComponent,
}: RegularListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...(item as T)} />
      ))}
    </>
  )
}

export default RegularList
