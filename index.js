const WEEK_DAYS = ["su", "m", "t", "w", "th", "f", "s"]

const handleRange = (range) => {
  const [rangeStart, rangeEnd] = range.split("-")
  const daysOfWeek = []
  const startIndex = WEEK_DAYS.indexOf(rangeStart)
  const endIndex = WEEK_DAYS.indexOf(rangeEnd)
  let rangeDays = []
  if (endIndex > startIndex) {
    rangeDays.push(...WEEK_DAYS.slice(startIndex, endIndex + 1))
  } else {
    rangeDays.push(...WEEK_DAYS.slice(0, endIndex + 1), ...WEEK_DAYS.slice(startIndex, WEEK_DAYS.length))
  }
  daysOfWeek.push(...rangeDays)
  return daysOfWeek
}

const handleWeekDays = (line) => {
  const lowerCaseLine = line.toLowerCase();
  const rangesAndDays = lowerCaseLine.split(",")
  const daysOfWeek = []
  rangesAndDays.forEach(item => {
    if (item.includes("-")) {
      daysOfWeek.push(...handleRange(item))
    }
    else daysOfWeek.push(item)
  })


  const uniqueDays = {}
  daysOfWeek.forEach(day => uniqueDays[day] = WEEK_DAYS.indexOf(day) + 1)
  return Object.values(uniqueDays).sort((a, b) => a - b)
}

console.log(handleWeekDays("th,m-w,su"))
console.log(handleWeekDays("th,f-m,su"))