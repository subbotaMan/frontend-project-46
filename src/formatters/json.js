import buildTree from '../buildTree.js'

const formatNode = (node) => {
  switch (node.type) {
    case 'added':
      return {
        key: node.key,
        type: 'added',
        value: node.value,
      }
    case 'removed':
      return {
        key: node.key,
        type: 'removed',
        value: node.value,
      }
    case 'unchanged':
      return {
        key: node.key,
        type: 'unchanged',
        value: node.value,
      }
    case 'changed':
      return {
        key: node.key,
        type: 'changed',
        value1: node.value1,
        value2: node.value2,
      }
    case 'nested':
      return {
        key: node.key,
        type: 'nested',
        children: node.children.map(child => formatNode(child)),
      }
    default:
      return null
  }
}

const json = (obj1, obj2) => {
  const tree = buildTree(obj1, obj2)
  const result = tree.map(node => formatNode(node)).filter(node => node !== null)

  return JSON.stringify(result, null, 2)
}

export default json
