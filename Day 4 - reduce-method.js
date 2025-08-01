const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 90 },
  { name: "Omar", marks: 78 }
];

const totalStudents = students.reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalStudents);

/// Same Exercise 2 ///


const cart = [
  { item: "Shirt", price: 1200 },
  { item: "Jeans", price: 2500 },
  { item: "Cap", price: 500 }
];

const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalPrice);
