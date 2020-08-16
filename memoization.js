function memoize(fn) {
  let isCalculated = false;
  let lastResult;
  return function memoizedFn() {
    // Return the generated function!
    if (isCalculated) {
      return lastResult;
    }
    let result = fn();
    lastResult = result;
    isCalculated = true;
    return result;
  };
}
