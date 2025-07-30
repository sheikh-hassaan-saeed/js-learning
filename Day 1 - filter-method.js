const students = [
  { id: 1, name: "Ahsan" },
  { id: 2, name: "Hassaan" },
  { id: 3, name: "Fatima" },
  { id: 4, name: "Zainab" },
];

function searchStudents(query) {
  return students.filter(student =>
    student.name.toLowerCase().includes(query.toLowerCase()) 
    // It will take the name, convert it to lowercase, then checks with the query and shows the result 
  );
}

console.log(searchStudents("sa"));

//Output: Ahsan, Hassaan
