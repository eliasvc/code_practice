/* Make a Counter
   Write a function createCounter() that returns two functions:
   increment(): increases a count
   get(): returns the count

   They must share the same private count variable.
*/
function createCounter() {
  let count = 0;
  let increment = function () {
    count++;
  };
  let get = () => {
    return count;
  };

  return { increment, get };
}

let c = createCounter();
console.log(c.get());
c.increment();
c.increment();
console.log(c.get());
