### Hexlet tests and linter status:
[![Actions Status](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/subbotaMan/frontend-project-46/actions)

### Git Actions:
[![hexlet-check](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml)

### SonarQube:
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=subbotaMan_frontend-project-462&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=subbotaMan_frontend-project-462)

# Gendiff

A command-line utility for comparing configuration files in JSON and YAML formats.

## Installation

```bash
npm install
```

## Usage

```bash
gendiff filepath1.json filepath2.json
gendiff filepath1.yaml filepath2.yaml
```

### Output formats

The utility supports three output formats:

- **stylish** (default) - human-readable format with + and - indicators
- **plain** - simple text format describing changes
- **json** - structured JSON format for programmatic use

```bash
gendiff --format stylish filepath1.json filepath2.json
gendiff --format plain filepath1.json filepath2.json
gendiff --format json filepath1.json filepath2.json
```

### Asciinema

### JSON
https://asciinema.org/a/NUtRbOdNY2wFYxtvBcVwNt1eO

### YAML \ YML
https://asciinema.org/a/SX3bUmsOl1FMGWPj13bTljp8k

### Working with flat and recursive files
https://asciinema.org/a/aoCd5iFXd3vvwFWJ1SWCmQ62u

### Working with new plain formatter
https://asciinema.org/a/qi37zk8SblU72QurtlulwJ5lI

### Working with json formatter
https://asciinema.org/a/eyud8oBzFwFnfzCCA9u8ssey7