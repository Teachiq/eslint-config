const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig.js')
const typescriptConfig = require('./configs/typescript')

module.exports = merge(defaultConfig, typescriptConfig)
