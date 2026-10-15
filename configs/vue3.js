import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import vueAccessibility from 'eslint-plugin-vuejs-accessibility'

// The plugin's recommended rules at warn, so upgrading reddens no consumer.
// Each repository promotes the rules it is clean on to error. The plugin's
// own flat config is not spread, because it declares browser globals for
// every file.
const accessibilityRules = Object.fromEntries(
  vueAccessibility.configs['flat/recommended']
    .flatMap((config) => Object.keys(config.rules ?? {}))
    .map((rule) => [rule, 'warn'])
)

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
      'vuejs-accessibility': vueAccessibility,
    },
    rules: {
      ...accessibilityRules,
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
