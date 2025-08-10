function makeCounter() {
  let count = 0;

  function counter() {
    count++;
    return count
  }
  return counter;
}

let myCounter = makeCounter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
