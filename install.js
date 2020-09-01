#!/usr/bin/env node

const fs = require('fs')
const spawn = require('child_process').spawn
const path = require('path')
const prettier = require('prettier')

const package = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const deps = Object.keys(package.peerDependencies)

function installPeerDependencies() {
  console.log('Installing peer dependencies...')
  npm = spawn('npm', ['install', '-D', ...deps], { stdio: 'inherit' })

  return npm
}

async function createPrettierConfig() {
  const internalDefaultConfig = {
    semi: false,
    singleQuote: true,
    printWidth: 120,
    trailingComma: 'all',
  }

  const projectPrettierConfigPath = await prettier.resolveConfigFile()
  const projectPrettierConfig = await prettier
    .resolveConfig(projectPrettierConfigPath)
    .then((config) => config)
    .catch(() => ({}))

  const newConfig = { ...projectPrettierConfig, ...internalDefaultConfig }

  const fileToWriteTo = projectPrettierConfigPath
    ? projectPrettierConfigPath
    : path.join(process.cwd(), './.prettierrc')

  fs.writeFileSync(fileToWriteTo, prettier.format(JSON.stringify(newConfig), { parser: 'json', printWidth: 50 }))
}

const install = installPeerDependencies()

install.on('exit', async () => {
  console.log('Generating prettier config...')
  await createPrettierConfig()

  process.exit(0)
})
