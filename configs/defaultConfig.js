import js from '@eslint/js'

import neostandard from 'neostandard'

export default [
  // Since 0.14, neostandard applies its rules and plugins only to the file
  // types it knows (.js, .cjs, .mjs, .jsx). Adding ours keeps them on every
  // file type 4.x covered; without its plugins, the rule settings below would
  // be a config error on those files.
  neostandard({
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
  }),
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
    rules: {
      // New in @eslint/js 10's recommended set. At warn, so upgrading reddens
      // no consumer; each repository promotes them to error once it is clean.
      'no-unassigned-vars': 'warn',
      'no-useless-assignment': 'warn',
      'preserve-caught-error': 'warn',
      // eslint-plugin-n 18 also reports callback({ … }) and callback([ … ]),
      // which in frontend code are mostly browser callbacks, not Node.js
      // error-first ones. At warn for the same reason.
      'n/no-callback-literal': 'warn',
      '@stylistic/space-before-function-paren': [
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
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@stylistic/generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
]
