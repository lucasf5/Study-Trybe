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
    name: "Duna",
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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const autora1947 = books.find((autora) => autora.author.birthYear === 1947);
// console.log(autora1947);

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  nameBook = books.sort((a, b) => a.name.length - b.name.length);
  nameBook = nameBook[0];
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin",
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991,
};

function getNamedBook() {
  const livro26 = books.find((livro) => livro.name.length === 26);
  return livro26;
}

// console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult2 = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: { name: "Stephen King", birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  let nameBook;

  nameBook = books.sort((a, b) => b.releaseYear - a.releaseYear);

  return nameBook;
}
// console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
  const ageSec = books.every((pessoas) => pessoas.author.birthYear > 1900);
  return ageSec;
}

// console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  const ageSec = books.some(
    (pessoas) => pessoas.releaseYear > 1980 && pessoas.releaseYear < 1990
  );
  return ageSec;
}
// console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult5 = false;

function authorUnique() {
  return books.every((autor) =>
    books.some(
      (OutroAutor) =>
        autor.author.birthYear === OutroAutor.author.birthYear &&
        autor.author.name !== autor.author.name
    )
  );
  // [ false, false, false, false, false, false ]
}
console.log(authorUnique());
