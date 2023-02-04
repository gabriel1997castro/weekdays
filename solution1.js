const WEEK_DAYS_PRIMARY_FORMAT = ["su", "m", "t", "w", "th", "f", "s"]
const WEEK_DAYS_SECOND_FORMAT = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const WEEK_DAYS_THIRD_FORMAT = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

const getWeekDayInPrimaryFormat = (day) => {
  if (WEEK_DAYS_PRIMARY_FORMAT.includes(day)) return day
  if (WEEK_DAYS_SECOND_FORMAT.includes(day)) {
    const id = WEEK_DAYS_SECOND_FORMAT.indexOf(day)
    return WEEK_DAYS_PRIMARY_FORMAT[id]
  }
  if (WEEK_DAYS_THIRD_FORMAT.includes(day)) {
    const id = WEEK_DAYS_THIRD_FORMAT.indexOf(day)
    return WEEK_DAYS_PRIMARY_FORMAT[id]
  }
  return day
}

const handleRange = (range) => {
  const [rangeStart, rangeEnd] = range.split("-").map(day => getWeekDayInPrimaryFormat(day))
  const startIndex = WEEK_DAYS_PRIMARY_FORMAT.indexOf(rangeStart)
  const endIndex = WEEK_DAYS_PRIMARY_FORMAT.indexOf(rangeEnd)
  const rangeDays = []
  if (endIndex > startIndex) {
    rangeDays.push(...WEEK_DAYS_PRIMARY_FORMAT.slice(startIndex, endIndex + 1))
  } else {
    rangeDays.push(...WEEK_DAYS_PRIMARY_FORMAT.slice(0, endIndex + 1), ...WEEK_DAYS_PRIMARY_FORMAT.slice(startIndex, WEEK_DAYS_PRIMARY_FORMAT.length))
  }
  return rangeDays
}

const handleWeekDays = (line) => {
  const parsedLine = line.toLowerCase().replace(/\s/g, '');
  const rangesAndDays = parsedLine.split(",")
  const daysOfWeek = []
  rangesAndDays.forEach(item => {
    if (item.includes("-")) {
      daysOfWeek.push(...handleRange(item))
    }
    else daysOfWeek.push(getWeekDayInPrimaryFormat(item))
  })


  const uniqueDays = {}
  daysOfWeek.forEach(day => uniqueDays[day] = WEEK_DAYS_PRIMARY_FORMAT.indexOf(day) + 1)
  return Object.values(uniqueDays).sort((a, b) => a - b)
}

module.exports = handleWeekDays