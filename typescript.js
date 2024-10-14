import { merge } from 'deepmerge'
import defaultConfig from './configs/defaultConfig.js'
import typescriptConfig from './configs/typescript.js'


export default merge(defaultConfig, typescriptConfig)
