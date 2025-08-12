import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml' // Парсер для YAML

// Получение данных из файла
const getData = (filepath) => {
// path.resolve - Сборка абсолютного пути файла
// process.cwd() - Текущая рабочая директория
// fs.readFileSync - Синхронное чтение файла
  const absolutePath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(absolutePath, 'utf-8')
}

// Парсинг данных в зависимости от расширения файла
const parse = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data)

    case '.yaml':
    case '.yml':
      return yaml.load(data)

    default:
      throw new Error(`Unknown file extension: ${ext}`)
  }
}

// Главная функция
export default (filepath) => {
  const data = getData(filepath)
  const ext = path.extname(filepath) // path.extname - Получение расширения файла
  return parse(data, ext)
}
