### Hexlet tests and linter status:
[![Actions Status](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/subbotaMan/frontend-project-46/actions)

### Git Actions:
[![hexlet-check](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/subbotaMan/frontend-project-46/actions/workflows/hexlet-check.yml)

### SonarQube:
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=subbotaMan_frontend-project-462&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=subbotaMan_frontend-project-462)

Gendiff - это консольная утилита для сравнения конфигурационных файлов в форматах JSON и YAML. Программа определяет различия между двумя файлами и выводит результат в выбранном формате.

Установка
npm install

Использование

Базовое использование
bash
gendiff filepath1.json filepath2.json
gendiff filepath1.yaml filepath2.yaml

С указанием формата вывода
bash
gendiff --format stylish filepath1.json filepath2.json
gendiff --format plain filepath1.json filepath2.json
gendiff --format json filepath1.json filepath2.json

Короткая версия опций
bash
gendiff -f stylish filepath1.json filepath2.json
gendiff -f plain filepath1.yaml filepath2.yaml
gendiff -f json filepath1.json filepath2.json

Форматы вывода
1. Stylish (по умолчанию)
Человеко-читаемый формат с индикаторами + и - для добавленных и удаленных свойств.

Пример вывода:

text
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: {
            key: value
        }
      + setting4: blah blah
    }
}

2. Plain
Простой текстовый формат, описывающий изменения в виде списка.

Пример вывода:

text
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to [complex value]
Property 'common.setting4' was added with value: 'blah blah'

3. JSON
Структурированный JSON формат для программного использования.

Пример вывода:

json
[
  {
    "type": "added",
    "key": "common.follow",
    "value": false
  },
  {
    "type": "removed", 
    "key": "common.setting2",
    "value": 200
  }
]

Поддерживаемые форматы файлов
JSON (.json)

YAML (.yaml, .yml)

Опции командной строки
-V, --version - вывести версию программы

-f, --format <type> - установить формат вывода (stylish, plain, json)

-h, --help - вывести справку по использованию

Примеры:
Сравнение JSON файлов
bash
gendiff file1.json file2.json
gendiff --format plain file1.json file2.json

Сравнение YAML файлов
bash
gendiff config1.yaml config2.yaml
gendiff -f json config1.yml config2.yml

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