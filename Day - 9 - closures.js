//closures come into use when you want to hide sensitive data, like storing bank account details. What it does is, the inner function can access the outer function for a specific purpose

function outer() {
  let message = ("Closures are used to access private data, in other words, they encapsulate the data");

  function inner() {
    console.log(message);
  }

  return inner;
}

const encapsulation = outer();
encapsulation();
