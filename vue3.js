const merge = require('deepmerge')
const defaultConfig = require('./configs/defaultConfig')
const vue3Config = require('./configs/vue3')

module.exports = merge(defaultConfig, vue3Config)