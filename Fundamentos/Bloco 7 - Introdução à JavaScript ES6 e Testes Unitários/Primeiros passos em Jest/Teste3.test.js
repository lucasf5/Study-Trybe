//! 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

const { describe, expect, it } = require("@jest/globals");

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe("Verifica se a funcao é divisivel por valores! ", ()=>{
    it("Testando se numero é divisivel por 3 e 5", ()=>{
        expect(myFizzBuzz(15)).toEqual("fizzbuzz")
    })
    it("Testando se numero é divisivel por 3", ()=>{
        expect(myFizzBuzz(9)).toEqual("fizz")
    })
    it("Testando se numero é divisivel por  5", ()=>{
        expect(myFizzBuzz(10)).toEqual("buzz")
    })
    it("Testando se numero não é divisivel por 3 e 5", ()=>{
        expect(myFizzBuzz(11)).toEqual(11)
    })
    it("Testando se numero é numero", ()=>{
        expect(myFizzBuzz("11")).toEqual(false)
    })
})