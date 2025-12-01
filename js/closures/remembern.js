/* Write remember(n) that returns a function adding n to whatever you pass in:

   const add5 = remember(5);
   add5(10);  // 15
*/

function remember(n) {
  return (number) => {
    return number + n;
  };
}

const add5 = remember(5);
console.log(add5(10));
