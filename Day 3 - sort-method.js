const students = [
  { name: "Ahsan", marks: 88 },
  { name: "Zoya", marks: 95 },
  { name: "Bilal", marks: 72 },
  { name: "Danish", marks: 85 }
];

const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

const final = sortedStudents.map(x => `${x.name}: ${x.marks}`);

console.log(final);

// Output:
// [
//   "Zoya: 95",
//   "Ahsan: 88",
//   "Danish: 85",
//   "Bilal: 72"
// ]
