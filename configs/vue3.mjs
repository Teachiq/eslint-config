

import pluginVue from 'eslint-plugin-vue'
// import type { Linter } from "eslint";

export default [
    
    {
        ...pluginVue.configs['flat/recommended'],
        files: ['*.vue', '**/*.vue'], 
        rules: {      
            'vue/v-on-event-hyphenation': 'off',
            'vue/static-class-names-order': 'warn',
            'vue/no-unused-properties': 'warn',
            'vue/prefer-true-attribute-shorthand': 'warn',
            'vue/no-constant-condition': 'error',
            'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
            'vue/block-order': [
                'error',
                {
                order: ['template', 'script', 'style'],
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/attribute-hyphenation': ['error', 'never'],
            'vue/no-potential-component-option-typo': 'error',
            'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
            'vue/max-len': [
                'warn',
                {
                    code: 120,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                    ignorePattern: 'd="([\\s\\S]*?)"', // Ignore SVG path
                    ignoreComments: true,
                    ignoreHTMLTextContents: true
                },
            ],
        },
    }
] 
// satisfies Linter.Config[];