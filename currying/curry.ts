function curry(fn: Function) {
  return function doCurry(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...argsNext) => {
        return doCurry(...argsNext, ...args);
      };
    }
  };
}
