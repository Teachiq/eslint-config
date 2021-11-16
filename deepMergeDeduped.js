const deepMergeDeduped = (source, target)  => {
  return Object.keys(target).forEach(key => {
    if(source[key] instanceof Object && target[key] instanceof Object) {
      if (source[key] instanceof Array && target[key] instanceof Array) {
        source[key] = Array.from(new Set(source[key].concat(target[key])))

      } else if (!(source[key] instanceof Array) && !(target[key] instanceof Array)) {
        deepMergeDeduped(source[key], target[key])

      } else {
        if (source[key] === target[key]) return

        source[key] = target[key]
      }
    }
  }) || source;
      
}
module.exports = deepMergeDeduped;
