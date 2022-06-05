import { expect, test } from 'vitest'

import { asArray } from './asArray'

test('should wrap number into an array', () => {
  expect(asArray(88)).toMatchObject([88])
})

test('should wrap null into an empty array', () => {
  expect(asArray(null)).toMatchObject([])
})

test('should wrap undefined into an empty array', () => {
  expect(asArray(undefined)).toMatchObject([])
})

test('should wrap 0 into an array', () => {
  expect(asArray(0)).toMatchObject([0])
})

test('should wrap -1 into an array', () => {
  expect(asArray(-1)).toMatchObject([-1])
})

test('should wrap object into an array', () => {
  expect(asArray({ test: 'ok' })).toMatchObject([{ test: 'ok' }])
})

test('should leave [number] array as it is', () => {
  expect(asArray([66])).toMatchObject([66])
})

test('should leave [number, number] array as it is (even the reference)', () => {
  const data = [45, 46]
  expect(asArray(data)).toBe(data)
})

test('should leave [null] array as it is', () => {
  const data = [null]
  expect(data).toBe(data)
})
