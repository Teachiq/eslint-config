import vue from "eslint-plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("@teachiq", "plugin:vue/vue3-recommended"), {
    plugins: {
        vue,
    },

    rules: {
        "vue/static-class-names-order": "warn",
        "vue/no-unused-properties": "warn",

        "vue/max-len": ["warn", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: "d=\"([\\s\\S]*?)\"",
        }],

        "vue/multi-word-component-names": "off",
        "vue/attribute-hyphenation": ["error", "never"],
        "vue/no-potential-component-option-typo": "error",

        "vue/html-quotes": ["error", "double", {
            avoidEscape: true,
        }],
    },
}];