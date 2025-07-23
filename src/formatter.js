const formatter = (obj1, obj2) => {
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort() // Коллекция уникальных отсортированных ключей

  const lines = keys.flatMap((key) => {
    if (!(key in obj2)) {
      return `  - ${key}: ${obj1[key]}` // Если ключа нет во втором объекте "-"
    }
    if (!(key in obj1)) {
      return `  + ${key}: ${obj2[key]}` // Если ключа нет в первом объекте "+"
    }
    if (obj1[key] !== obj2[key]) {
      return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`] // Если ключи есть в двух объектах, но их значения не совпадают "-" и "+"
    }

    return `    ${key}: ${obj1[key]}` // Если ключи есть в двух объектах, и их значения совпадают
  })

  return `{
${lines.join('\n')}
}`
}

export default formatter
