const produto = { nome: "Caneca", preco: 25 }

//?  spreed operator
const outroProduto = {...produto, material: "Porcelana"}

//? assign
// Object.assign(destino, objeto, {incremento (opcional)})
const caneca = Object.assign({}, produto, { material: "porcelana" }) 

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

const total = Object.assign(
    {}, 
    person, info, family, 
    {dog: "yes"}
)

console.log(total)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */



const person1 = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person1,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);