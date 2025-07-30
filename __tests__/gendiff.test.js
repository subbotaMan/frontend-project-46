/* eslint-env jest */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import formatter from '../src/formatter.js'
import { stylish } from '../src/formatter.js'
import expected from '../__fixtures__/expected.js'
import expectedFlat from '../__fixtures__/expectedFlat.js'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => resolve(__dirname, '../__fixtures__', filename)
const readFixture = filename => JSON.parse(readFileSync(getFixturePath(filename), 'utf-8'))
const readYamlFixture = filename => yaml.load(readFileSync(getFixturePath(filename), 'utf-8'))

describe('gendiff flat json', () => {
  it('should compare two flat json files correctly', () => {
    const obj1 = readFixture('flat1.json')
    const obj2 = readFixture('flat2.json')
    const result = formatter(obj1, obj2)
    expect(result).toBe(expectedFlat)
  })
})

describe('gendiff flat yaml', () => {
  it('should compare two flat yaml files correctly', () => {
    const obj1 = readYamlFixture('flat1.yaml')
    const obj2 = readYamlFixture('flat2.yaml')
    const result = formatter(obj1, obj2)
    expect(result).toBe(expectedFlat)
  })
})

describe('gendiff nested json', () => {
  it('should compare two nested json files correctly', () => {
    const obj1 = readFixture('file1.json')
    const obj2 = readFixture('file2.json')
    const result = stylish(obj1, obj2)
    expect(result).toBe(expected)
  })
})

describe('gendiff nested yaml', () => {
  it('should compare two nested yaml files correctly', () => {
    const obj1 = readYamlFixture('file1.yaml')
    const obj2 = readYamlFixture('file2.yaml')
    const result = stylish(obj1, obj2)
    expect(result).toBe(expected)
  })
})
