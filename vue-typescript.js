const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig')
const typescriptConfig = require('./configs/typescript')
const vueConfig = require('./configs/vue')

module.exports = merge.all([defaultConfig, typescriptConfig, vueConfig])
