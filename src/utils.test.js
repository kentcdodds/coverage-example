import {clone} from './utils'

test('clone', () => {
  expect(clone()).toBe(undefined)
  expect(clone('hi')).toBe('hi')
  expect(clone({a: 'b'})).toEqual({a: 'b'})
})
