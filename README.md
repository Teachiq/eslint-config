# Teachiq eslint-config

This package is intended to configure everything you need for eslint relevant vscode extensions

## Installing

`npm install -D @teachiq/eslint-config`

## Using

Make sure all your local Eslint dependencies are removed along with anything related to prettier.

For ESLint v9+ with flat config:

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import vue3ts from '@teachiq/eslint-config/vue3-typescript'

export default defineConfig([
  ...vue3ts,
  {
    files: ['**/*.js'],

    // anything from here will override vue3ts
    rules: {
      'vue/no-setup-props-reactivity-loss': 'off',
    },
  },
])
```

## Upgrading from 4.x to 5.0

5.0 is for ESLint 10. Stay on 4.x until your other ESLint plugins support ESLint 10 too.

1. Requirements: `eslint` 10 and Node.js `^22.13.0 || >=24`.
2. Install in two steps. Swapping 4.x for 5.0 in one `npm install` fails with a misleading `ERESOLVE`, because the
   lockfile still holds 4.x's dependencies, which require ESLint 9:

   ```sh
   npm uninstall @teachiq/eslint-config
   npm install -D eslint@^10 @teachiq/eslint-config@^5
   ```

3. Your `eslint.config.js` stays the same: `...vue3ts` and the other entry points work as before.

What changes:

- **Import rules are gone.** neostandard 0.13 removed `eslint-plugin-import-x`, so `import-x/export`, `import-x/first`,
  `import-x/no-absolute-path`, `import-x/no-duplicates`, `import-x/no-named-default` and
  `import-x/no-webpack-loader-syntax` no longer run. If you want them, add `eslint-plugin-import-x` in your own config.
  `eslint-plugin-import` has no ESLint 10 version; `eslint-plugin-import-x` is the replacement.
- **New warnings** from `@eslint/js` 10's recommended set: `no-unassigned-vars`, `no-useless-assignment` and
  `preserve-caught-error`. They are `warn`, so they don't fail a lint without `--max-warnings`; set them to `error`
  in your config once your code is clean.
- **`n/no-callback-literal` is now `warn`.** eslint-plugin-n 18 also reports `callback({ … })` and `callback([ … ])`,
  which in frontend code are mostly browser callbacks (`ResizeObserver`, listener mocks), not Node.js error-first ones.
- The default entry point (`@teachiq/eslint-config`) now also lints `.ts`, `.mts`, `.cts` and `.vue` files, which
  4.x skipped. It has no TypeScript or Vue parser, so for those files use `vue3-typescript` (or add `typescript` /
  `vue3`).
- The React rules from neostandard are gone (they don't apply to Vue), and so is the "Processing:" progress output.

## VScode Extensions

This config works best with the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

## Format on save

In order to get the "format on save" in vscode to work with this config you need to change some user settings.

Your user settings- or workspace settings (the one in the .vscode directory) .json files must include the following:

_settings.json_

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.validate": ["javascript", "vue"]
}
```

If you have the VSCode StyleLint plugin, make sure `.vue` files are enabled there as well

```json
"stylelint.validate": [..., "vue"],
```

## Troubleshooting

- Sometimes the package-lock file doesn't seem to update properly. Try with a fresh install. Remove package-lock and node folder then run install again.

- Try to install eslint-config with --legacy-peer-deps flag

- Make sure you removed all project Eslint packages before installation

- Try rebooting VS Code
