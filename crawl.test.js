const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
  const input = 'http://developer.mozilla.org'
  const actual = normalizeURL(input)
  const expected = 'developer.mozilla.org'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
  const input = 'http://developer.mozilla.org'
  const actual = normalizeURL(input)
  const expected = 'developer.mozilla.org'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
  const input = 'http://developer.mozilla.org'
  const actual = normalizeURL(input)
  const expected = 'developer.mozilla.org'
  expect(actual).toEqual(expected)
})
