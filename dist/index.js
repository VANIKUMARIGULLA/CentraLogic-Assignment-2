"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./students");
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
];
console.log("Passed Students:", (0, students_1.filterPassedStudents)(students));
console.log("Student Names:", (0, students_1.getStudentNames)(students));
console.log("Sorted by Grade:", (0, students_1.sortStudentsByGrade)(students));
console.log("Average Age:", (0, students_1.getAverageAge)(students));
