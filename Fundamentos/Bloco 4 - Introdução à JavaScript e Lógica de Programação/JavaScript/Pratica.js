// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

numbers.forEach((item) => {
    console.log(item);
})

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let valor = 0
numbers.forEach((item) => {
    valor += item;
    return valor
})

console.log(valor);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = 0
numbers.forEach((item) => {
    media += item;
    return media
})

console.log(media/numbers.length);


// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

const maximo = Math.max(...numbers);
console.log(maximo);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numero = 0
numbers.forEach((item) => {
    if (item % 2 == 0) {
        numero++
    }
})
console.log(numero);
if (numero == 0) {
    console.log("nenhum valor ímpar encontrado");
}



// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

const minimo = Math.min(...numbers);
console.log(minimo);


// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let lista = []

for (let i = 0; i < 26; i++){
    lista.push(i)
}

console.log(lista);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

lista.forEach((item) => {
    console.log(item/2);
})