import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml' // Парсер для YAML

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath) // path.resolve - Сборка абсолютного пути файла // process.cwd() - Текущая рабочая директория
  return fs.readFileSync(absolutePath, 'utf-8') // fs.readFileSync - Синхронное чтение файла
}

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

export default (filepath) => {
  const data = getData(filepath)
  const ext = path.extname(filepath) // path.extname - Получение расширения файла
  return parse(data, ext)
}
