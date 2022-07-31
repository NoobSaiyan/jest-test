const { sumAsync, subtractAsync } = require('../utils/math')

// Promises
test('promise returns sum in async', () => {
  return sumAsync(2, 2).then(data => {
    expect(data).toBe(4)
  })
})

// Async/Await
test('async/await returns sum in async', async () => {
  const data = await sumAsync(2, 2)
  expect(data).toBe(4)
})
test('returns sum in async', async () => {
  const data = await sumAsync(2, 2)
  expect(data).toBe(4)
})

// Resolve/Reject
test('sum resolve', () => {
  return expect(sumAsync(2, 2)).resolves.toBe(4)
})
// test('sum reject', () => {
//   return expect(sumAsync(2, 2)).rejects.toMatch('error')
// })
