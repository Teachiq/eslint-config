const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig.js')
const vueConfig = require('./configs/vue')

module.exports = merge(defaultConfig, vueConfig)