// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
    return arr.some(nome => nome === name)
};

console.log(hasName(names, "Ana"));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 19 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);
};

console.log(verifyAges(people, 18));

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const peoples = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione se código aqui
//! IDADES CRESCENTE 
peoples.sort((a,b)=> a.age-b.age)

console.log(peoples);

//! IDADES DECRESCENTE 
peoples.sort((a, b) => b.age - a.age)

console.log(peoples);

//! NOMES CRESCENTE 
peoples.sort();

console.log(peoples);

//! NOMES DECRESCENTE 
peoples.sort().reverse();

console.log(peoples);

