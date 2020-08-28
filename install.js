const fs = require('fs')
const install = require('spawn-npm-install')
const path = require('path')

const package = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const deps = Object.keys(package.peerDependencies)

console.log('Installing peer dependencies...')

install(deps, { cwd: '../../../', stdio: 'inherit' })
