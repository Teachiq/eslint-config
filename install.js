const fs = require('fs')
const spawn = require('child_process').spawn
const path = require('path')

const package = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const deps = Object.keys(package.peerDependencies)

console.log('Installing peer dependencies...')
spawn('npm', ['install', '-D', ...deps], { cwd: '../../../', stdio: 'inherit' })
