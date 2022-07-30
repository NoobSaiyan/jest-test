// Common Matchers
test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})
test('object', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

// Truthiness
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).toBeFalsy()
  expect(n).not.toBeTruthy()
  expect(n).not.toBeUndefined()
})
test('zero', () => {
  const n = 0
  expect(n).not.toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).toBeFalsy()
  expect(n).not.toBeTruthy()
})

// Numbers
test('two plus two', () => {
  const number = 2 + 2
  expect(number).toBeGreaterThan(3)
  expect(number).toBeGreaterThanOrEqual(3)
  expect(number).toBeLessThan(5)
  expect(number).toBeLessThanOrEqual(4)
})
test('floating number toEqual alt', () => {
  const float = 3.9 + 2.3
  expect(float).toBeCloseTo(6.2)
})

// String
test('string', () => {
  expect('test string').not.toMatch(/Test/)
  expect('test string').toMatch(/test/)
})

// Array and Iterables
const shoppingList = ['paneer', 'dahi', 'doodh', 'sauce']
test('shopping list have paneer💪', () => {
  expect(shoppingList).toContain('paneer')
})

// Exceptions
function something() {
  throw new Error('something is wrong here mate')
}
test('exceptions', () => {
  expect(() => something()).toThrow()
  expect(() => something()).toThrow(Error)

  // using expact message
  expect(() => something()).toThrow('something is wrong here mate')
  expect(() => something()).toThrow(/mate/)
})
