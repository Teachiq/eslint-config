const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(process.cwd(), '.browserslistrc'))) {
  process.env.BROWSERSLIST_CONFIG='node_modules/@teachiq/eslint-config/.browserslistrc'
  console.info('.browserslistrc does not exist in project. Using @teachiq/eslint-config default')
};
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'standard',
    'plugin:compat/recommended'
  ],
  ignorePatterns: ['**/*.min.js', '**/polyfill.js', '**/*.d.ts', '/**/*.less', '**/*.map', '**/*.css', '**/*.png'],
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
