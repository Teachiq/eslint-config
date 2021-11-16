const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig')
const vueConfig = require('./configs/vue')

module.exports = merge(defaultConfig, vueConfig)