export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (time && time !== '0001-01-01T00:00:00Z') {
    date = new Date(time)
  } else {
    return '-'
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export function formatTime (time, option) {
  if (!time) {
    return '-'
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟以内'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时以内'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function addUnit (val, i = 0) {
  if (val) {
    const units = ['BI', 'KIB', 'MIB', 'GIB'].slice(i)
    while (parseInt(val / (Math.pow(1024, i))) >= 1024 && i < units.length) {
      i++
    }
    return (val / (Math.pow(1024, i))).toFixed(2) + units[i]
  } else {
    return '-'
  }
}

export function transformArrayToString (val, i = 0) {
  return Array.isArray(val) && val.length > 0 ? val.join(',') : '-'
}
