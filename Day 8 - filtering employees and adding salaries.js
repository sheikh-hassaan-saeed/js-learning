const employees = [
  { name: "Ali", salary: 100 },
  { name: "Sara", salary: 200 },
  { name: "Ali", salary: 100 }
];

const filteredEmp = employees.filter((item, index, arr) => {

  return arr.findIndex(obj => obj.name === item.name) === index;

})

const totalEmp = filteredEmp.reduce((total, emp) => total + emp.salary, 0);

console.log(totalEmp);

//First it filters the repeated names, then add the total salary of filtered names
