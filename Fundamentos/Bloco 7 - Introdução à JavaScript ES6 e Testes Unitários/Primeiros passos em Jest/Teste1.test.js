const { describe, expect } = require("@jest/globals");

//! 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
function soma(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Algum valor passado não é um numero!")
    } return a + b;
}

//* implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('a funcao soma', ()=>{
    test('retorna 9 quando passado dois valores positivos e maior que 0', () => {
        expect(soma(4,5)).toEqual(9)
    });
    test('retorna 0 quando passado dois valores igual a 0', () => {
        expect(soma(0,0)).toEqual(0)
    });
    test('testa se algum erro é passado!', ()=>{
        expect(()=>{soma(1,"b")}).toThrow()
    });
    test('testa se a mensagem de erro é "Algum valor passado não é um numero!"', () => {
        expect(() => { soma(1,"b") }).toThrowError(new Error('Algum valor passado não é um numero!'));
    });
})
