import merge from 'deepmerge';
import defaultConfig from './configs/defaultConfig.js';
import typescriptConfig from './configs/typescript.js';
import vue3Config from './configs/vue3.js';

export default merge.all([defaultConfig, typescriptConfig, vue3Config]);