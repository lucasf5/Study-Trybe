//! 1 - Você está pronto para um desafio?! Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando:

const { detailed } = require("yargs-parser");

// A função;
// Os testes para essa função;

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

//* Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível".

// Pesquisa
let listaDeDetalhes = []
const searchEmployee = (id, datails) => {
  for (let i = 0; i < professionalBoard.length; i++){
    if(professionalBoard[i].id === id){
      if (typeof datails === "object"){
        datails.forEach(detalhe => {
          listaDeDetalhes.push(professionalBoard[i][detalhe])
        })
      } else if(professionalBoard[i][datails] !== undefined) {
        return professionalBoard[i][datails]
      } 
      return listaDeDetalhes
    }
  }
};

console.log(searchEmployee('4456-4',["firstName", "lastName"]))