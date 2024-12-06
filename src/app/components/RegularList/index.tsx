import React from 'react';

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  itemComponent: React.ComponentType<{ [key: number]: T }>;
}

export const RegularList = <T,>({
  items, 
  resourceName, 
  itemComponent: ItemComponent
}: RegularListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent 
          key={index}
          {...{ [resourceName]: item }}
        />
      ))}
    </>
  );
}
