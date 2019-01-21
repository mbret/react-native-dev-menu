/* eslint-env jest */
const { isError } = require('../is-error')

describe('.isError()', () => {
  test('works', () => {
    expect(isError()).toBe(false)
    expect(isError('foo')).toBe(false)
    expect(isError(new Error())).toBe(true)
  })
})
