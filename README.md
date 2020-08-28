# Teachiq eslint-config

This package is intended to configure everything you need for eslint and prettier and their relevant vscode extensions

## Installing

`npm install --save-dev @teachiq/eslint-config`

**Important:** The package should install all necessary peer dependencies, but if you run into problems run `npx install-peerdeps --dev @teachiq/eslint-config`

## Using

In your .eslintrc json file

```json
{
    "extends": "@teachiq"
}
```

**Note:** That should be all you need in your .eslintrc file, unless you explicitly want to override the official config (not recommended)

## VScode Extensions

This config works best with the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions
