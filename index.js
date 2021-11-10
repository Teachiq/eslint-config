module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  ignorePatterns: ['**/*.min.js', '**/polyfill.js'],
  plugins: ['vue', 'file-progress'],
  rules: {
    'file-progress/activate': 1,
    'vue/static-class-names-order': 'warn',
    'vue/no-unused-properties': 'warn',
    'vue/max-len': [
      'warn',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'd="([\\s\\S]*?)"', // Ignore SVG path
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-potential-component-option-typo': 'error',
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
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
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'standard',
        'plugin:vue/recommended',
      ],
      rules: {
        'file-progress/activate': 1,
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'comma-dangle': ['error', 'always-multiline'],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-useless-constructor': 'off',
      },
    },
  ],
}
