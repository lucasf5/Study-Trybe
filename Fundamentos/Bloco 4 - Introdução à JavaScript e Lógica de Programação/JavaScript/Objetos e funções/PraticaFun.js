//? 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//! Exemplo de palíndromo: arara .
//! verificaPalindrome('arara') ;
//! Retorno esperado: true
//! verificaPalindrome('desenvolvimento') ;
//! Retorno esperado: false

function palidronomo (nome) {
    const nomeInvertido = nome.split("").reverse().join("")
    
    if (nomeInvertido == nome) {
        console.log(true);
    } else {        
        console.log(false);
    }
}

palidronomo("arara")

//? 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//! Array de teste: [2, 3, 6, 7, 10, 1];.
//! Valor esperado no retorno da função: 4.
const array = [2, 3, 6, 7, 10, 1]
function valorMaior (numero) {
    const valorMaximo = Math.max(...numero)
    console.log(numero.indexOf(valorMaximo));
}

valorMaior(array)

//? 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//! Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//! Valor esperado no retorno da função: 6 .
const array2 = [2, 4, 6, 7, 10, 0, -3]
function valorMenor (numero) {
    const valorMaximo = Math.min(...numero)
    console.log(numero.indexOf(valorMaximo));
}

valorMenor(array2)

//? 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//! Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//! Valor esperado no retorno da função: Fernanda.

const arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNomeDaLista(numero) {
    const lista = []
    for (let i = 0; i < numero.length; i++){
        lista.push(numero[i].length)
    }
    const valorMaximo = Math.max(...lista)
    const indexMaximo = lista.indexOf(valorMaximo);
    console.log(numero[indexMaximo]);
}

maiorNomeDaLista(arrayNomes)


// ? 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//! Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//! Valor esperado no retorno da função: 2 .
const arrayRepete = [2, 3, 2, 5, 8, 2, 3]


//? 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let soma = 0
function somatoria (numero) {
    for (let i = 0; i <= numero; i++) {
        soma+=i
    }
    console.log(soma);
}

somatoria(6)

//? 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
//! Valor de teste: 'trybe' e 'be'
//! Valor esperado no retorno da função: true
//! verificaFimPalavra('trybe', 'be') ;
//! Retorno esperado: true
//! verificaFimPalavra('joaofernando', 'fernan') ;
//! Retorno esperado: false

function terminaCom(word, end) {
    console.log(word.endsWith(end))
}

terminaCom('trybe', 'be')

function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;

}
console.log(confirmEnding("Open sesame", "ame"));