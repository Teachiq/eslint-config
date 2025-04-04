import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  ...vuePlugin.configs['flat/vue2-recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      vue: vuePlugin,
    },
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
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/no-potential-component-option-typo': 'error',
      'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    },
  },
]
