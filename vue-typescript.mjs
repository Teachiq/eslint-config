import merge from 'deepmerge';
import defaultConfig from './configs/defaultConfig.js';
import typescriptConfig from './configs/typescript.js';
import vueConfig from './configs/vue.js';

export default merge.all([defaultConfig, typescriptConfig, vueConfig]);
