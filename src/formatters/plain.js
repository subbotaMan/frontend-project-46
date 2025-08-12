import buildTree from '../buildTree.js'

const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const formatNode = (node, path = '') => {
  const currentPath = path ? `${path}.${node.key}` : node.key

  switch (node.type) {
    case 'added':
      return `Property '${currentPath}' was added with value: ${formatValue(node.value)}`
    case 'removed':
      return `Property '${currentPath}' was removed`
    case 'changed':
      return `Property '${currentPath}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`
    case 'nested': {
      const children = node.children
        .map(child => formatNode(child, currentPath))
        .flat()
        .filter(result => result !== '')
      return children
    }
    case 'unchanged':
      return ''
    default:
      return ''
  }
}

const plain = (obj1, obj2) => {
  const tree = buildTree(obj1, obj2)
  const lines = tree
    .map(node => formatNode(node))
    .flat()
    .filter(line => line !== '')

  return lines.join('\n')
}

export default plain
