import fs from 'fs'
import path from 'path'

// path.resolve - Сборка абсолютного пути файла
// process.cwd() - Текущая рабочая директория
// fs.readFileSync - Синхронное чтение файла
// path.extname - Получение расширения файла

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(absolutePath, 'utf-8')
}

const parse = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data)
    default:
      throw new Error(`Unknown file extension: ${ext}`)
  }
}

export default (filepath) => {
  const data = getData(filepath)
  const ext = path.extname(filepath)
  return parse(data, ext)
}
