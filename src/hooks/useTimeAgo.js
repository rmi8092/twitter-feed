const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getSecondsDiff = timeStamp => (Date.now() - timeStamp) / 1000

const getUnitAndValueDate = (secondsElapsed) => {
  for(const [unit,secondsInUnit] of Object.entries(DATE_UNITS)) {
    if(secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return {value, unit}
    }
  }
}

const getTimeAgo = (timeStamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale)
  const secondsElapsed = getSecondsDiff(timeStamp)
  const {value, unit} = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit) 
}

export default function useTimeAgo(timeStamp) {
  const locale = 'es'
  const timeAgo = getTimeAgo(timeStamp, locale)
  const date = new Date(timeStamp)
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: 'long', day: 'numeric'
  }).format(date)
  return {
    dateTime: formattedDate,
    timeAgo
  }
}