#!/usr/bin/env node

const fs = require('fs')
const spawn = require('child_process').spawn
const path = require('path')

const package = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const deps = Object.keys(package.peerDependencies)

console.log('Installing peer dependencies...')
npm = spawn('npm', ['install', '-D', ...deps], { stdio: 'inherit' })

npm.on('exit', () => {
    process.exit(0)
})
