import { useEffect, useState } from 'react'

interface ResourceFunction<T> {
  (): Promise<T>
}

// This hook is used to fetch data from the server and return it.
// function example to replace the hook parameter function
// const serverResource = resourceUrl => async () => {
//   const response = await axios.get(resourceUrl)
//   return response.data
// }

export const useDataSource = <T>(
  getResourceFunction: ResourceFunction<T>,
): T | null => {
  const [resource, setResource] = useState<T | null>(null)

  useEffect(() => {
    ;(async () => {
      const result = await getResourceFunction()
      setResource(result)
    })()
  }, [getResourceFunction])

  return resource
}
