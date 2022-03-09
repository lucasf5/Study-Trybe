//? 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


function quadrado(numero) {
    let aux = ""
    for (let linha = 0; linha < numero; linha++){
            for (let coluna = 0; coluna < numero; coluna++){
                aux += "*"
        }
        console.log(aux);
        aux = ""
    }
}

quadrado(5)


//? 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

function triangulo(numero) {
    let aux = ""
    
    for (let i = 0; i < numero; i++){
        aux += "*"
        console.log(aux);
    }
 }

triangulo(5)

//? 3- Tabuada

// for (let i = 0; i <= 10; i++){
//     console.log("Tabuada do " + i);
//     for (let x = 0; x <= 10; x++){
//         console.log(`${i} * ${x} = ${i*x}`);
//     }
// }

