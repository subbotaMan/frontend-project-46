# Makefile

install: # Установка зависимостей
	npm ci	

publish: # Публикация на npm
	npm publish --dry-run

lint: # Проверка на ошибки
	npx eslint . 

test: # Запуск тестов
	npm test

test-coverage: # Запуск тестов с покрытием
	npm test -- --coverage --coverageProvider=v8

