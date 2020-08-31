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
    'plugin:vue/essential',
    '@vue/typescript',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [2, 2],
    'no-tabs': 0,
    'comma-dangle': ['error', 'always-multiline'],
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
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
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
