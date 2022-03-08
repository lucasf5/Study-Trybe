// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function maior(...a) {
    const max = Math.max(...a);
    console.log(max);
}
maior(1, 2, 4, 8, 4, 11, 9, 10, 1);
