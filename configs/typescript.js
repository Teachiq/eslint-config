export default {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  rules: {
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
}

