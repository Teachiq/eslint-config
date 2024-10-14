const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig.js')
const typescriptConfig = require('./configs/typescript.js')
const vue3Config = require('./configs/vue3')

module.exports = merge.all(defaultConfig, typescriptConfig, vue3Config)