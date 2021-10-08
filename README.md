# Teachiq eslint-config

This package is intended to configure everything you need for eslint relevant vscode extensions

## Installing

`npm install -D @teachiq/eslint-config`

## Using
Make sure all your local Eslint dependencies are removed.

After install you need a `.eslintrc.js` in your project. 

It should look like this:
```js
module.exports = {
  extends: ['@teachiq'],
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

