import yaml from 'js-yaml'

export default (data, dataType) => {
  switch (dataType) {
    case 'json':
      return JSON.parse(data)
    case 'yml':
      return yaml.load(data)
    default:
      throw new Error(`Unknown type of data: '${dataType}'!`)
  }
}
