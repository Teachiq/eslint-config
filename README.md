# Teachiq eslint-config

This package is intended to configure everything you need for eslint and prettier and their relevant vscode extensions

## Installing

`npm install -D @teachiq/eslint-config`

## Using

After the install finishes, you should be able to run `npx teachiq-config-install`. This installs all peer dependencies needed to run the linter.

In case the above does not work, try targeting the install script directly by running `./node_modules/.bin/teachiq-config-install` in your project directory.

Then, in your .eslintrc json file, replace your existing config with:

```json
{
  "extends": "@teachiq"
}
```

**Note:** That should be all you need in your .eslintrc file, unless you explicitly want to override the official config (not recommended)

## VScode Extensions

This config works best with the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions

### Format on save

In order to get the "format on save" in vscode to work with this config you need a .prettierrc config file as well as to change some user settings.

1. your user settings- or workspace settings (the one in the .vscode directory) .json files must include the following:

_settings.json_

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

2. create a new file called `.prettierrc` and add the following

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "trailingComma": "all"
}
```
