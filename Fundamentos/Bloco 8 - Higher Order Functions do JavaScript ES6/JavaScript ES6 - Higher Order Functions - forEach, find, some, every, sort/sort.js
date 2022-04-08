const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//!ATENCAO
//? Como o sort só organiza de forma alfabetica, é necessário colocar (a-b) => a- b, para que ele ordene de forma numerica 
numbers.sort((a, b) => a - b);

// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.sort((a, b) => b - a);

// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();

// console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione se código aqui
const ages = [].sort((a,b)=> a-b)
const age = people.forEach(item => ages.push(item.age))
ages.sort((a, b) => a - b)

const adc = people

console.log(ages);