const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig.js')
const vue3Config = require('./configs/vue3')

module.exports = merge(defaultConfig, vue3Config)