/* Default rules live here */

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'standard',
  ],
  ignorePatterns: ['**/*.min.js', '**/polyfill.js', '**/*.d.ts', '/**/*.less', '**/*.map'],
  plugins: ['file-progress'],
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
}
