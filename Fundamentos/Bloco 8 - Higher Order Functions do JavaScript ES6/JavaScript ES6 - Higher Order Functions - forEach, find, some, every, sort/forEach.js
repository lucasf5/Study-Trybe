const students = [
  { name: "Maria", grade: 70, approved: "" },
  { name: "José", grade: 56, approved: "" },
  { name: "Roberto", grade: 90, approved: "" },
  { name: "Ana", grade: 81, approved: "" },
];

function verifyGrades() {
  students.forEach((student) => {
    if (student.grade >= 60) {
      student.approved = "Aprovado";
    } else {
      student.approved = "Recuperação";
    }
  });
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
