import defaultConfig from './configs/defaultConfig.js'
import vue3ts from './configs/vue3-typescript.js'
import { defineConfig } from 'eslint/config'

// eslint.config.js

export default defineConfig([
  defaultConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.vue'],
    extends: [vue3ts],
  },
])
