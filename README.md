# Teachiq eslint-config

This package is intended to configure everything you need for eslint relevant vscode extensions

## Installing

`npm install -D @teachiq/eslint-config`

## Using
Make sure all your local Eslint dependencies are removed along with anything related to prettier.

After install you need a `.eslintrc.js` in your project. 

It should look like this:
```js
module.exports = {
  extends: ['@teachiq/eslint-config/{profile-name}'],
}
```
Where profile-name should be replaced with one of the profile options 
* `vue`
* `vue3`
* `typescript`
* `vue-typescript`
* `vue3-typescript`

If you want the base linting only add `@teachiq` instead, like this
```js
module.exports = {
  extends: ['@teachiq'],
}
```

**Note:** That should be all you need in your .eslintrc file, unless you explicitly want to override the official config (not recommended)

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
  "eslint.validate": [
    "javascript",
    "vue"
  ]
}
```

If you have the VSCode StyleLint plugin, make sure `.vue` files are enabled there as well

```json
"stylelint.validate": [..., "vue"],
```

## Troubleshooting

* Sometimes the package-lock file doesn't seem to update properly. Try with a fresh install. Remove package-lock and node folder then run install again.

* Try to install eslint-config with --legacy-peer-deps flag

* Make sure you removed all project Eslint packages before installation

* Try rebooting VS Code
