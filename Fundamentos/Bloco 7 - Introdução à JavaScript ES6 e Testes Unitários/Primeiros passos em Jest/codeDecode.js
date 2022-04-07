function encode(frase) {
  const letras = frase.split('');
  let lista = [];
  for (let letra of letras) {
    if (letra === 'a') {
      lista.push(1);
    } else if (letra === 'e') {
      lista.push(2);
    } else if (letra === 'i') {
      lista.push(3);
    } else if (letra === 'o') {
      lista.push(4);
    } else if (letra === 'u') {
      lista.push(5);
    } else {
      lista.push(letra);
    }
  }
  return lista.join('');
}

function decode(frase) {
  const numeros = frase.split('');
  let listaLetras = [];
  for (let numero of numeros) {
    if (numero === '1') {
      listaLetras.push('a');
    } else if (numero === '2') {
      listaLetras.push('e');
    } else if (numero === '3') {
      listaLetras.push('i');
    } else if (numero === '4') {
      listaLetras.push('o');
    } else if (numero === '5') {
      listaLetras.push('u');
    } else {
      listaLetras.push(numero);
    }
  }
  return listaLetras.join('');
}
function hydrate(bebida) {
  const letras = bebida.split('');
  const listaDeNumeros = [];
  let listaDeNumerosConvertidos = [];
  let soma = 0;
  for (let letra of letras) {
    if (letra === '1' || letra === '2' || letra === '3' || letra === '4' || letra === '5' || letra === '6' || letra === '7' || letra === '8' || letra === '9') {
      listaDeNumeros.push(letra);
    }
  }
  for (let numero of listaDeNumeros) {
    listaDeNumerosConvertidos.push(parseInt(numero));
  }

  listaDeNumerosConvertidos.forEach((numeroPassado) => {
    soma += numeroPassado;
  });
  if (soma === 1) { return `${soma} copo de água`; } return `${soma} copos de água`;
}
module.exports = {encode, decode, hydrate}