// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

// console.log(flatten())

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Dunaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
  // acc => somatoria
  // curr => proximo valor
  return books.reduceRight(
    //   comeca com uma string vazia, vai para o proximo valor, que no primeiro caso, é o primeiro valor, depois o valor do curr (valor atual) vira o valor do acc.
    (acc, curr) => curr.author.name.concat(", ", acc),
    ""
  );
}
// console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
  return (
    books.reduce(
      (acc, curr) => (curr.releaseYear - curr.author.birthYear) + acc,0
    ) / books.length
  );
}

// console.log(averageAge()); //43

// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr;
    } else {
      return acc;
    }
  });
}

// console.log(longestNamedBook());

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, curr) => acc + curr.split('').reduce((acumulador, current) => {
    if (current === "A" || current === "a") {
      return acumulador+=1
    } else {
      return acumulador;
    }
  }, 0),0)
}

// console.log(containsA());

// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  return students.map((student, index) => (
    {
      name: student,
      average: grades[index].reduce((acc, curr)=> acc + curr)/grades[index].length
    }
  ))
}

console.log(studentAverage());
