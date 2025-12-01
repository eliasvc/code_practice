/* makeGreeter(greeting) returns a function that takes a name.

  const hi = makeGreeter("Hi");
  hi("Elias");  // "Hi Elias"
*/
function makeGreeter(greeting) {
  return (greeted) => {
    return `${greeting} ${greeted}`;
  };
}

const hi = makeGreeter("Hi");
console.log(hi("Elias"));
