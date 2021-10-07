# Teachiq eslint-config

This package is intended to configure everything you need for eslint relevant vscode extensions

## Installing

`npm install -D @teachiq/eslint-config`

## Using

After install you need a `.eslintrc.js` in your project. 

It should look like this:
```js
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@teachiq/eslint-config','...any other extensions the project needs'],
}
```

**Note:** That should be all you need in your .eslintrc file, unless you explicitly want to override the official config (not recommended)

## VScode Extensions

This config works best with the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension

### Format on save

In order to get the "format on save" in vscode to work with this config you need to change some user settings.

Your user settings- or workspace settings (the one in the .vscode directory) .json files must include the following:

_settings.json_

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "vue",
  ],
}
```

### Troubleshoot

This implementation depends on Eslint 7.8.0 beeing used. Sometimes when installing with NPM 7 the peerDependencies is not working as intended. To solve this you can install this package with the flag --legacy-peer-deps.

```
npm install -D @teachiq/eslint-config --legacy-peer-deps
```

