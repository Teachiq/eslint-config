import fileProgress from "eslint-plugin-file-progress";
import js from '@eslint/js'
import globals from "globals";


export default 
    {
        name: "default",
        ignores: [
            "**/*.min.js",
            "**/polyfill.js",
            "**/*.d.ts",
            "**/*.css",
            "**/*.png",
            "**/*.min.css",
            "**/*.less",
            "**/*.map",
            "**/*.svg",
            "**/*.snap",
        ],
        plugins: {
            fileProgress,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.node,
            }
        },
        files: ["*.js"],
        rules: {
            ...js.configs.recommended.rules,
            "fileProgress/activate": 1,
            "space-before-function-paren": ["error", {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            }],
            "array-callback-return": "off",
            "no-misleading-character-class": "off",
            "no-control-regex": "off",
            "object-curly-spacing": ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],
            "max-len": "off",
            "no-console": "off",
            "generator-star-spacing": "off",
            "no-debugger": "off",
        }
    }