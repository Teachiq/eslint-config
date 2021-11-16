const deepMergeDeduped = require('./deepMergeDeduped.js');
const  typescriptConfig  = require('./typescript');
const  vue3Config  = require('./vue3');

module.exports = deepMergeDeduped(typescriptConfig, vue3Config)