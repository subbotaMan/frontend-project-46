import _ from 'lodash';
import yaml from 'js-yaml';

const parseNum = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => parseNum(item))
  }

  if (!_.isString(value)) {
    return value
  }

  const convertedValue = Number(value)

  return (Number.isNaN(convertedValue)) ? value : convertedValue
}

export default (data, dataType) => {
  switch (dataType) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown type of data: '${dataType}'!`)
  }
}
