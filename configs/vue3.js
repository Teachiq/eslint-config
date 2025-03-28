import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      'vue/no-setup-props-reactivity-loss': 'warn',
      'vue/static-class-names-order': 'warn',
      'vue/require-default-prop': 'error',
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
