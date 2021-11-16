const deepMergeDeduped = require('./deepMergeDeduped.js')
const typescriptConfig = require('./typescript')
const vueConfig = require('./vue')

module.exports = deepMergeDeduped(typescriptConfig, vueConfig)
