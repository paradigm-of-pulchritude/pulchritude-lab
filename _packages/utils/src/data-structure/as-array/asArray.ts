import { SingleOrArray } from '../../types/SingleOrArray'

/**
 * - wraps objects and primitives into an array
 * - null and undefined results in an empty array
 * @example
 * 2 => [2]
 * "hello" => ["hello"]
 * [9, 3] => [9, 3] // (same reference)
 * null => []
 */
export const asArray = <T>(data: SingleOrArray<T> | undefined): T[] => {
  if (Array.isArray(data)) return data
  if (data !== undefined && data !== null) return [data]
  return []
}
