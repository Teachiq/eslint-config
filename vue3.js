const deepMergeDeduped = require('./deepMergeDeduped.js')
const defaultConfig = require('./index')

module.exports = deepMergeDeduped(defaultConfig, {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['vue'],
  rules: {
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
  },
})
