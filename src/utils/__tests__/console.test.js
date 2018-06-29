/* eslint-env jest */
const {warn, deprecate} = require('../console')
const _warn = console.warn

describe('.warn()', () => {
  test('no crash', () => {
    expect(warn('foo')).toBe(undefined)

    console.warn = null
    expect(warn('foo')).toBe(undefined)
    console.warn = _warn
  })
})

describe('.deprecate()', () => {
  test('no crash', () => {
    expect(deprecate('foo')).toBe(undefined)
    // branch: already displayed
    expect(deprecate('foo')).toBe(undefined)
  })
})
