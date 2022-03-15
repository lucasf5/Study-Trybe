// ! FOR/IN me da um index, mas se eu acesso um objeto com ele, o meu index, será a minha a chave

//? 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let nome in names) {
    console.log("Olá, " + names[nome]);
}

//? 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in names) {
    console.log("Chave: "+ i + ", Valor: " + names[i]);
}