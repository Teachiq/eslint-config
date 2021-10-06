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
    '@vue/typescript',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
  ],
  ignorePatterns: ['**/*.min.js', '**/polyfill.js'],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/static-class-names-order': 'warn',
    'vue/max-len': ['warn', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: 'd="([\\s\\S]*?)"', // Ignore SVG path
    }],
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
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    indent: ['error', 2],
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 0,
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
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
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
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
