import merge from 'deepmerge';
import defaultConfig from './configs/defaultConfig.js';
import vue3Config from './configs/vue3.js';

export default merge(defaultConfig, vue3Config);