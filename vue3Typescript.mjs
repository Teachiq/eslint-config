import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import fileProgress from "eslint-plugin-file-progress";
import globals from "globals";

export default [
    ...eslintPluginVue.configs['flat/recommended'],

    // ...ts.configs.recommended, 
    // {
    //     languageOptions: {
    //         globals: {
    //             ...globals.browser,
    //             ...globals.jest,
    //             ...globals.node,
    //         },
    //         ecmaVersion: 6,
    //         sourceType: 'script'
    //     },
    //     ignores: [
    //         "**/*.min.js",
    //         "**/polyfill.js",
    //         "**/*.d.ts",
    //         "**/*.css",
    //         "**/*.png",
    //         "**/*.min.css",
    //         "**/*.less",
    //         "**/*.map",
    //         "**/*.svg",
    //         "**/*.snap",
    //     ],
    //     plugins: {
    //         fileProgress,
    //     },
    //     rules: {
    //         "fileProgress/activate": 1,
    //         "space-before-function-paren": ["error", {
    //             anonymous: "always",
    //             named: "never",
    //             asyncArrow: "always",
    //         }],
    //         "array-callback-return": "off",
    //         "no-misleading-character-class": "off",
    //         "no-control-regex": "off",
    //         "object-curly-spacing": ["error", "always"],
    //         "comma-dangle": ["error", "always-multiline"],
    //         "max-len": "off",
    //         "no-console": "off",
    //         "generator-star-spacing": "off",
    //         "no-debugger": "off",
    //     },
    // },
    // {
    //     files: ['*.vue', '**/*.vue'],
    //     languageOptions: {
    //         parserOptions: {
    //             parser: '@typescript-eslint/parser'
    //         }
    //     },
    //     rules: {      
    //         'vue/v-on-event-hyphenation': 'off',
    //         'vue/static-class-names-order': 'warn',
    //         'vue/no-unused-properties': 'warn',
    //         'vue/prefer-true-attribute-shorthand': 'warn',
    //         'vue/no-constant-condition': 'error',
    //         'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    //         'vue/block-order': [
    //             'error',
    //             {
    //             order: ['template', 'script', 'style'],
    //             },
    //         ],
    //         'vue/multi-word-component-names': 'off',
    //         'vue/attribute-hyphenation': ['error', 'never'],
    //         'vue/no-potential-component-option-typo': 'error',
    //         'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    //         'vue/max-len': [
    //             'warn',
    //             {
    //                 code: 120,
    //                 ignoreUrls: true,
    //                 ignoreStrings: true,
    //                 ignoreTemplateLiterals: true,
    //                 ignoreRegExpLiterals: true,
    //                 ignorePattern: 'd="([\\s\\S]*?)"', // Ignore SVG path
    //                 ignoreComments: true,
    //                 ignoreHTMLTextContents: true
    //             },
    //         ],
    //     },
    // },
    // {
    //     files: ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'],
    //     rules: {
    //         '@typescript-eslint/no-var-requires': 'off',
    //         '@typescript-eslint/no-unused-expressions': 'off',
    //         '@typescript-eslint/no-empty-function': 'off',
    //         '@typescript-eslint/no-unused-expressions': 'error',
    //         '@typescript-eslint/no-explicit-any': 'off',
    //         '@typescript-eslint/no-extra-semi': 'off',
    //         '@typescript-eslint/no-unused-vars': [
    //             'error',
    //             {
    //                 vars: 'all',
    //                 args: 'after-used',
    //                 ignoreRestSiblings: false,
    //                 argsIgnorePattern: '^_',
    //             },
    //         ],
    //     },
    // },
    
    
       
    // js.configs.recommended,
]
