// #1. Square each number
const numbers = [2, 4, 6, 8];

let sqNums = numbers.map(num => num * num);
console.log(sqNums); 
// Output: [ 4, 16, 36, 64 ]

////////////////////////////////////

// #2. Gives product names and prices in an array form
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 50 }
];

let arr = products.map(product => `${product.name}: $${product.price}`);
console.log(arr); 
// Output: [ 'Laptop: $1200', 'Mouse: $50' ]
