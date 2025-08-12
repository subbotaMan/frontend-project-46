/* eslint-env jest */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'
import genDiff from '../src/index.js'
import { expectedPlain1, expectedPlain2, expectedPlain3, expectedNasted, expectedFlat, expectedJsonFlat, expectedJsonNested } from '../__fixtures__/expected.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => resolve(__dirname, '../__fixtures__', filename)
const readFixture = filename => JSON.parse(readFileSync(getFixturePath(filename), 'utf-8'))
const readYamlFixture = filename => yaml.load(readFileSync(getFixturePath(filename), 'utf-8'))

describe('gendiff flat json', () => {
  it('should compare two flat json files correctly', () => {
    const obj1 = readFixture('flat1.json')
    const obj2 = readFixture('flat2.json')
    const result = genDiff(getFixturePath('flat1.json'), getFixturePath('flat2.json'), 'stylish')
    expect(result).toBe(expectedFlat)
  })
})

describe('gendiff flat yaml', () => {
  it('should compare two flat yaml files correctly', () => {
    const obj1 = readYamlFixture('flat1.yaml')
    const obj2 = readYamlFixture('flat2.yaml')
    const result = genDiff(getFixturePath('flat1.yaml'), getFixturePath('flat2.yaml'), 'stylish')
    expect(result).toBe(expectedFlat)
  })
})

describe('gendiff nested json', () => {
  it('should compare two nested json files correctly', () => {
    const obj1 = readFixture('nested1.json')
    const obj2 = readFixture('nested2.json')
    const result = genDiff(getFixturePath('nested1.json'), getFixturePath('nested2.json'), 'stylish')
    expect(result).toBe(expectedNasted)
  })
})

describe('gendiff nested yaml', () => {
  it('should compare two nested yaml files correctly', () => {
    const obj1 = readYamlFixture('nested1.yaml')
    const obj2 = readYamlFixture('nested2.yaml')
    const result = genDiff(getFixturePath('nested1.yaml'), getFixturePath('nested2.yaml'), 'stylish')
    expect(result).toBe(expectedNasted)
  })
})

describe('gendiff plain format', () => {
  it('should format nested json files in plain format', () => {
    const expectedPlain = expectedPlain1

    const result = genDiff(getFixturePath('nested1.json'), getFixturePath('nested2.json'), 'plain')
    expect(result).toBe(expectedPlain)
  })

  it('should format nested yaml files in plain format', () => {
    const expectedPlain = expectedPlain2

    const result = genDiff(getFixturePath('nested1.yaml'), getFixturePath('nested2.yaml'), 'plain')
    expect(result).toBe(expectedPlain)
  })

  it('should format flat json files in plain format', () => {
    const expectedPlain = expectedPlain3

    const result = genDiff(getFixturePath('flat1.json'), getFixturePath('flat2.json'), 'plain')
    expect(result).toBe(expectedPlain)
  })
})

describe('gendiff json format', () => {
  it('should format flat json files in json format', () => {
    const result = genDiff(getFixturePath('flat1.json'), getFixturePath('flat2.json'), 'json')
    expect(result).toBe(expectedJsonFlat)
  })

  it('should format flat yaml files in json format', () => {
    const result = genDiff(getFixturePath('flat1.yaml'), getFixturePath('flat2.yaml'), 'json')
    expect(result).toBe(expectedJsonFlat)
  })

  it('should format nested json files in json format', () => {
    const result = genDiff(getFixturePath('nested1.json'), getFixturePath('nested2.json'), 'json')
    expect(result).toBe(expectedJsonNested)
  })

  it('should format nested yaml files in json format', () => {
    const result = genDiff(getFixturePath('nested1.yaml'), getFixturePath('nested2.yaml'), 'json')
    expect(result).toBe(expectedJsonNested)
  })
})
