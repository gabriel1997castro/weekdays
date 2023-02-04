const DAYS_MAP = {
  "su": 1,
  "sun": 1,
  "sunday": 1,
  "m": 2,
  "mon": 2,
  "monday": 2,
  "t": 3,
  "tu": 3,
  "tue": 3,
  "tuesday": 3,
  "w": 4,
  "we": 4,
  "wed": 4,
  "wednesday": 4,
  "th": 5,
  "thur": 5,
  "thursday": 5,
  "f": 6,
  "fr": 6,
  "fri": 6,
  "friday": 6,
  "s": 7,
  "sa": 7,
  "sat": 7,
  "saturday": 7
};

const DAYS_ARRAY = [1, 2, 3, 4, 5, 6, 7]

const handleRange = (range) => {
  const [rangeStart, rangeEnd] = range.split("-")
  const startIndex = DAYS_MAP[rangeStart] - 1
  const endIndex = DAYS_MAP[rangeEnd] - 1

  const rangeDays = []
  if (endIndex > startIndex) {
    rangeDays.push(...DAYS_ARRAY.slice(startIndex, endIndex + 1))
  } else {
    rangeDays.push(...DAYS_ARRAY.slice(0, endIndex + 1), ...DAYS_ARRAY.slice(startIndex, DAYS_ARRAY.length))
  }
  return rangeDays
}

function handleWeekDays(line) {
  const parsedLine = line.toLowerCase().replace(/\s/g, '');
  const rangesAndDays = parsedLine.split(",")
  const daysOfWeek = []

  rangesAndDays.forEach(item => {
    if (item.includes("-")) {
      daysOfWeek.push(...handleRange(item))
    }
    else daysOfWeek.push(DAYS_MAP[item])
  })

  return Array.from(new Set(daysOfWeek)).sort((a, b) => a - b);
}

module.exports = handleWeekDays