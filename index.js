module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  ignorePatterns: ['**/*.min.js', '**/polyfill.js'],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/static-class-names-order': 'warn',
    'vue/max-len': [
      'warn',
      {
        code: 120,
        ignoreUrls: true,
        ignorePattern: 'd="([\\s\\S]*?)"', // Ignore SVG path
      },
    ],
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
        '@vue/typescript',
        '@vue/standard',
        '@vue/typescript/recommended',
        '@vue/eslint-config-typescript',
      ],
      rules: {
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/no-unused-expressions': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-extra-semi': 0,
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
}
