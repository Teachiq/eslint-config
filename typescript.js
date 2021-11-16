const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig')
const typescriptConfig = require('./configs/typescript')

module.exports = merge(defaultConfig, typescriptConfig)
