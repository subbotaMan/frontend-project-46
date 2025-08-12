import parseFile from './parsers.js'
import getFormatter from './formatters/index.js'

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)
  const formatter = getFormatter(formatName)

  return formatter(data1, data2)
}

export default genDiff
