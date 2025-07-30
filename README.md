# Gendiff

A command-line utility for comparing configuration files in JSON and YAML formats.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/subbotaMan/frontend-project-46/actions)

## Installation

```bash
npm install
```

## Usage

```bash
gendiff filepath1.json filepath2.json
gendiff filepath1.yaml filepath2.yaml
```

## Example

### Input files

**file1.json:**
```json
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```

**file2.json:**
```json
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```

### Output

```bash
$ gendiff file1.json file2.json
{
      common: {
        + follow: false
          setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: null
        + setting4: blah blah
        + setting5: {"key5":"value5"}
          setting6: {
              doge: {
                - wow:  
                + wow: so much
            }
              key: value
            + ops: vops
        }
    }
      group1: {
        - baz: bas
        + baz: bars
          foo: bar
        - nest: {"key":"value"}
        + nest: str
    }
    - group2: {"abc":12345,"deep":{"id":45}}
    + group3: {"deep":{"id":{"number":45}},"fee":100500}
}
```

### Asciinema

### JSON
https://asciinema.org/a/NUtRbOdNY2wFYxtvBcVwNt1eO

### YAML \ YML
https://asciinema.org/a/SX3bUmsOl1FMGWPj13bTljp8k

### Working with flat and recursive files
https://asciinema.org/a/aoCd5iFXd3vvwFWJ1SWCmQ62u

### SonarQube
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=subbotaMan_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=subbotaMan_frontend-project-46)