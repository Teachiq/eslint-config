
import { merge } from 'webpack-merge'
import defaultConfig from './configs/defaultConfig.js'
import vueConfig from './configs/vue.js'

export default merge(defaultConfig, vueConfig)