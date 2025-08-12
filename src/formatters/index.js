import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

// Фабрика форматов вывода

// Форматы вывода
const formatters = {
  stylish,
  plain,
  json,
}

// Получение формата вывода
const getFormatter = (formatName) => {
  const formatter = formatters[formatName]
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formatter
}

export default getFormatter
