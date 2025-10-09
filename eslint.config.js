import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import jestPlugin from 'eslint-plugin-jest'

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },

  {
    files: ['**/__tests__/**/*.{js,mjs,cjs}', '**/*.test.{js,mjs,cjs}'],
    ...jestPlugin.configs['flat/recommended'],
  },
])
