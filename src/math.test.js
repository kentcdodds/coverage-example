import {add, multiply} from './math'

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('multiply', () => {
  expect(multiply(3, 5)).toBe(15)
})
