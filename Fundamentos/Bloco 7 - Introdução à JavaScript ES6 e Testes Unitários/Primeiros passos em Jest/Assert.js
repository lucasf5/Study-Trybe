const assert = require('assert');

function retornaNumeros(){
    const numero1 = Math.floor(Math.random()*10)
    const numero2 = Math.floor(Math.random()*10)
    assert.strictEqual(numero1, numero2)
}

assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 !== 70

retornaNumeros()