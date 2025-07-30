import buildTree from './buildTree.js'

const getIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2)
const getBracketIndent = (depth, spacesCount = 4) => ' '.repeat((depth - 1) * spacesCount)

const formatValue = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    if (value === '') return ''
    return String(value)
  }

  const entries = Object.entries(value)

  const lines = entries.map(([key, val]) => {
    const formatted = formatValue(val, depth + 1)
    if (formatted === '') {
      return `${getIndent(depth + 1)}  ${key}: `
    }
    return `${getIndent(depth + 1)}  ${key}: ${formatted}`
  })

  return `{
${lines.join('\n')}
${getBracketIndent(depth + 1)}}`
}

const formatNode = (node, depth = 1) => {
  const indent = getIndent(depth)
  const bracketIndent = getBracketIndent(depth)

  switch (node.type) {
    case 'added':
      return `${indent}+ ${node.key}: ${formatValue(node.value, depth)}`
    case 'removed':
      return `${indent}- ${node.key}: ${formatValue(node.value, depth)}`
    case 'unchanged':
      return `${indent}  ${node.key}: ${formatValue(node.value, depth)}`
    case 'changed':
      return [
        `${indent}- ${node.key}: ${formatValue(node.value1, depth)}`,
        `${indent}+ ${node.key}: ${formatValue(node.value2, depth)}`,
      ]
    case 'nested': {
      const children = node.children.map(child => formatNode(child, depth + 1)).flat()
      return [
        `${indent}  ${node.key}: {`,
        ...children,
        `${bracketIndent}  }`,
      ]
    }
    default:
      return ''
  }
}

const stylish = (obj1, obj2) => {
  const tree = buildTree(obj1, obj2)
  const lines = tree.map(node => formatNode(node)).flat()

  return `{
${lines.join('\n')}
}`
}

const formatter = (obj1, obj2) => {
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort()
  const lines = keys.flatMap((key) => {
    if (!(key in obj2)) {
      return `  - ${key}: ${obj1[key]}`
    }
    if (!(key in obj1)) {
      return `  + ${key}: ${obj2[key]}`
    }
    if (obj1[key] !== obj2[key]) {
      return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`]
    }
    return `    ${key}: ${obj1[key]}`
  })

  return `{
${lines.join('\n')}
}`
}

export { stylish }
export default formatter
