import _ from 'lodash'

const buildDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2))
  const sortedKeys = _.sortBy(keys)

  return sortedKeys.map((key) => {
    const keyObj1 = _.has(obj1, key)
    const keyObj2 = _.has(obj2, key)

    if (keyObj1 && !keyObj2) return { type: 'removed', key, value: obj1[key] }
    if (!keyObj1 && keyObj2) return { type: 'added', key, value: obj2[key] }

    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { type: 'nested', key, children: buildDiff(obj1[key], obj2[key]) }
    }

    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        type: 'updated', key, oldValue: obj1[key], newValue: obj2[key],
      }
    }

    return { type: 'unchanged', key, value: obj1[key] }
  })
}

export default buildDiff
