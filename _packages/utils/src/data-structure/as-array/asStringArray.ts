import { SingleOrArray } from '../../types/SingleOrArray'

export const asStringArray = (
  data: SingleOrArray<string | number | undefined>,
): string[] => {
  let list: string[] = []

  if (Array.isArray(data)) {
    list = data
      .filter(item => item !== undefined && data !== null)
      .map(item => String(item))
  } else if (data !== undefined && data !== null) {
    list = [String(data)]
  }

  return list
}
