// Write a function once(fn) that returns a new function which calls fn only the first time,
// and returns the same value on subsequent calls.
//

function once(fn) {
  let called = false;
  let returnVal;

  return () => {
    if (!called) {
      called = true;
      returnVal = fn();
    }
    return returnVal;
  };
}
