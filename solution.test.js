describe("test solution 1", () => {
  const handleWeekDays = require('./solution1.js')

  test('return range m-f', () => {
    expect(handleWeekDays("m-f").toString()).toBe([2, 3, 4, 5, 6].toString())
  })

  test('should accept m-w,s,su and return Monday, Tuesday, Wednesday, Saturday, Sunday', () => {
    expect(handleWeekDays("m-w,s,su").toString()).toBe([1, 2, 3, 4, 7].toString())
  })

  test('should not break with spaces', () => {
    expect(handleWeekDays("m-w ,s, su ").toString()).toBe([1, 2, 3, 4, 7].toString())
  })

  test('should work in any order', () => {
    expect(handleWeekDays("th,f-m,su").toString()).toBe([1, 2, 5, 6, 7].toString())
  })

  test('should work with different formats together', () => {
    expect(handleWeekDays("th,friday-m,su").toString()).toBe([1, 2, 5, 6, 7].toString())
  })
})

describe("test solution 2", () => {
  const handleWeekDays = require('./solution2.js')

  test('return range m-f', () => {
    expect(handleWeekDays("m-f").toString()).toBe([2, 3, 4, 5, 6].toString())
  })

  test('should accept m-w,s,su and return Monday, Tuesday, Wednesday, Saturday, Sunday', () => {
    expect(handleWeekDays("m-w,s,su").toString()).toBe([1, 2, 3, 4, 7].toString())
  })

  test('should not break with spaces', () => {
    expect(handleWeekDays("m-w ,s, su ").toString()).toBe([1, 2, 3, 4, 7].toString())
  })

  test('should work in any order', () => {
    expect(handleWeekDays("th,f-m,su").toString()).toBe([1, 2, 5, 6, 7].toString())
  })

  test('should work with different formats together', () => {
    expect(handleWeekDays("th,friday-m,su").toString()).toBe([1, 2, 5, 6, 7].toString())
  })
})