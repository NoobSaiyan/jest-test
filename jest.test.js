const { sumAsync, subtractAsync } = require('./math')

test('async function of sum', async () => {
  const result = await sumAsync(2, 4)
  const expected = 8
  expect(result).toBe(expected)
})
test('async function of subutract', async () => {
  const result = await subtractAsync(6, 3)
  const expected = 3
  expect(result).toBe(expected)
})
