const fs = require('fs')
const cp = require('child_process')
const path = require('path')

const package = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const deps = Object.keys(package.peerDependencies)

const install = () => {
    console.log('Installing peer dependencies...')
    cp.exec(`npm i -D ${deps.join(' ')}`, { cwd: '../../../' }, (err, stdout, stderr) => {
        if (err) {
            console.error(`error installing peer dependencies: ${err}`)
        }

        console.log(stdout)
        console.log(stderr)
    })
}

install()
