# Makefile

install: # Установка зависимостей
	npm ci	

publish: # Публикация на npm
	npm publish --dry-run

lint: # Проверка на ошибки
	npx eslint . 