const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig')
const typescriptConfig = require('./configs/typescript')
const vue3Config = require('./configs/vue3')

module.exports = merge.all([defaultConfig, typescriptConfig, vue3Config])