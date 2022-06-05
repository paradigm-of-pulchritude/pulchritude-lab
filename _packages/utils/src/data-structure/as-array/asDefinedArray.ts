import { SingleOrArray } from '../../types/SingleOrArray'

export const asDefinedArray = <T>(data: SingleOrArray<T | undefined>): T[] => {
  let list: T[] = []

  if (Array.isArray(data)) {
    list = data.filter(item => item !== undefined && data !== null) as T[]
  } else if (data !== undefined && data !== null) {
    list = [data]
  }

  return list
}
