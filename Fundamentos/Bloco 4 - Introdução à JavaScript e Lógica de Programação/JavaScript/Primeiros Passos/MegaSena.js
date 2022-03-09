let numeros = [1, 2, 3, 4, 5, 6]
let meusNumeros = [1, 2, 4, 8, 10, 12]


// numeros.forEach((numero) => {
//     meusNumeros.forEach((meuNumero) => {
//         if (numero == meuNumero) {
//             numeroSorteado.push(meuNumero)
//         }
//     })
// })

for (let i = 0; i < numeros.length; i++){
    for (let x = 0; x < meusNumeros.length; x++){
        if (numeros[i] == meusNumeros[x]) {
            console.log("Sorteados: " + meusNumeros[x]);
        }
    }
}

// console.log("Numeros sorteados: "+numeroSorteado);