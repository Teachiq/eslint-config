import js from '@eslint/js'
import fileProgress from 'eslint-plugin-file-progress'

import neostandard from 'neostandard'

export default [
  neostandard(),
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // Equivalent to env: { node: true, browser: true, es6: true }
        window: 'readonly',
        document: 'readonly',
        require: 'readonly',
        module: 'writable',
        process: 'readonly',
      },
    },
    plugins: {
      'file-progress': fileProgress,
    },
    rules: {
      'file-progress/activate': 'warn',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'array-callback-return': 'off',
      'no-misleading-character-class': 'off',
      'no-control-regex': 'off',
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
]
