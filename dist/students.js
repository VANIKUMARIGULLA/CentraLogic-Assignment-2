"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = void 0;
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
];
// Function to filter students who passed
function filterPassedStudents(students) {
    return students.filter((student) => student.grade >= 50);
}
exports.filterPassedStudents = filterPassedStudents;
// Function to get student names
function getStudentNames(students) {
    return students.map((student) => student.name);
}
exports.getStudentNames = getStudentNames;
// Function to sort students by grade
function sortStudentsByGrade(students) {
    return students.slice().sort((a, b) => a.grade - b.grade);
}
exports.sortStudentsByGrade = sortStudentsByGrade;
// Function to get average age of students
function getAverageAge(students) {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
exports.getAverageAge = getAverageAge;
