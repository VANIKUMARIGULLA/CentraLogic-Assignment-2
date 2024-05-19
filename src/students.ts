const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 },
  ];
  
  // Function to filter students who passed
  function filterPassedStudents(
    students: { name: string; age: number; grade: number }[]
  ): { name: string; age: number; grade: number }[] {
    return students.filter((student) => student.grade >= 50);
  }
  
  // Function to get student names
  function getStudentNames(
    students: { name: string; age: number; grade: number }[]
  ): string[] {
    return students.map((student) => student.name);
  }
  
  // Function to sort students by grade
  function sortStudentsByGrade(
    students: { name: string; age: number; grade: number }[]
  ): { name: string; age: number; grade: number }[] {
    return students.slice().sort((a, b) => a.grade - b.grade);
  }
  
  // Function to get average age of students
  function getAverageAge(
    students: { name: string; age: number; grade: number }[]
  ): number {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
  }
  
  export {
    filterPassedStudents,
    getStudentNames,
    sortStudentsByGrade,
    getAverageAge,
  };
  