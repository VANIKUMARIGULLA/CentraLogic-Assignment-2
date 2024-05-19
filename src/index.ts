import {
    filterPassedStudents,
    getStudentNames,
    sortStudentsByGrade,
    getAverageAge,
  } from "./students";
  
  const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
  ];
  
  console.log("Passed Students:", filterPassedStudents(students));
  console.log("Student Names:", getStudentNames(students));
  console.log("Sorted by Grade:", sortStudentsByGrade(students));
  console.log("Average Age:", getAverageAge(students));