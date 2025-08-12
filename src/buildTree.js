// Функция для построения дерева различий

const buildTree = (obj1, obj2) => {
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort()

  return keys.map((key) => {
    if (!(key in obj1)) {
      return { key, type: 'added', value: obj2[key] }
    }
    if (!(key in obj2)) {
      return { key, type: 'removed', value: obj1[key] }
    }
    if (obj1[key] === obj2[key]) {
      return { key, type: 'unchanged', value: obj1[key] }
    }

    // Если значения разные, проверяю, являются ли они объектами
    if (typeof obj1[key] === 'object' && obj1[key] !== null
      && typeof obj2[key] === 'object' && obj2[key] !== null
      && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      return {
        key,
        type: 'nested',
        children: buildTree(obj1[key], obj2[key]),
      }
    }

    return {
      key,
      type: 'changed',
      value1: obj1[key],
      value2: obj2[key],
    }
  })
}

export default buildTree
