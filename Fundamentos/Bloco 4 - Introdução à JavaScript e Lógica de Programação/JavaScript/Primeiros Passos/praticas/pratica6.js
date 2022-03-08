// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
function verificaNumeroPAR(...numeros) {
    const lista = [...numeros];
    const resposta = lista.some(elem => elem % 2 == 0);
    console.log(resposta);
}
verificaNumeroPAR(1, 2, 4);
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
function verificaNumeroIMPAR(...numeros) {
    const lista = [...numeros];
    const resposta = lista.some(elem => elem % 2 !== 0);
    console.log(resposta);
}
verificaNumeroIMPAR(6, 2, 4);
