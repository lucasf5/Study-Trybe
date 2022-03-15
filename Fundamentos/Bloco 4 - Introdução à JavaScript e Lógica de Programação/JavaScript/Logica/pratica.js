// * Aprofunde seus conhecimentos

// !Leia atentamente os enunciados e faça o que se pede!
// Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger , acesse nosso conteúdo sobre isso.

// ? 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// ? O fatorial é representado pelo sinal !
//! $! = 4 x 3 x 2 x 1 = 24

let fator = 1
function fatorial (valor) {
    for (let i = valor; i > 0; i--){
        fator *= i
    }
    return fator
}

console.log(fatorial(10));


//? 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

console.log(word.split("").reverse().join(""));

//? 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'lucasferreirapinto', 'html', 'css'];

// !Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let lista = []
for (let i = 0; i < array.length; i++){
    lista.push(array[i].length)
}

const maiorPalavra = Math.max(...lista)
const maiorIndex = lista.indexOf(maiorPalavra)
console.log(array[maiorIndex]);

//? 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

function primeNumber(num) {
    for (let i = 2; i <= num; i++){

        let primo = true;

        // ! Verificando se o numero é divisivel por qualquer numero que não seja 1 ou ele mesmo. Pois todos são:

        for (let x = 2; x < i; x++){
            if (i % x === 0) {
                primo = false
                break
            }
        }

        if (primo) {
            console.log(i);
        }
    }
}

primeNumber(50)


