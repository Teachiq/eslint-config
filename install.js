const fs = require('fs')
const cp = require('child_process')
const { stderr } = require('process')

const package = JSON.parse(fs.readFileSync('./package.json'))

const deps = Object.keys(package.peerDependencies)

const install = () => {
    console.log('Installing peer dependencies...')
    cp.exec(`npm i -D ${deps.join(' ')}`, (err, stdout, stderr) => {
        if (err) {
            console.error(`error installing peer dependencies: ${err}`)
        }

        console.log(stdout)
        console.log(stderr)
    })
}

install()
