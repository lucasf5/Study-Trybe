const product = {
  name: "Smart TV Crystal UHD",
  price: "1899.05",
  seller: "Casas de Minas",
};

const { name: nome } = product;

// console.log(nome); //"Smart TV Crystal UHD"



const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays:diasDeTrabalho, weekend:FinaisDeSemana } = daysOfWeek;

// console.log(diasDeTrabalho); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(FinaisDeSemana); // ['Saturday', 'Sunday']


const student = {
  a: "Maria",
  b: "Turma B",
  c: "Matematica",
};
const { a: name, b: classAssigned, c: subject } = student;

// student.a => name
console.log(name);


function recebendo({ name, price, seller }) {
    console.log(name);
    console.log(price);
    console.log(seller);
}

recebendo(product);