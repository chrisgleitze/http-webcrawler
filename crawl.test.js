const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
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

test('getURLsFromHTML', () => {
  const inputHTMLBody = `
<html>
  <body>
    <a href="http://developer.mozilla.org">
      MDN
    </a>
  </body>
</html>
`
  const inputBaseURL = "https://developer.mozilla.org"
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ["developer.mozilla.org"]
  expect(actual).toEqual(expected)
})
