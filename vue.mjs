import merge from 'deepmerge';
import defaultConfig from './configs/defaultConfig.js';
import vueConfig from './configs/vue.js';

export default merge(defaultConfig, vueConfig);