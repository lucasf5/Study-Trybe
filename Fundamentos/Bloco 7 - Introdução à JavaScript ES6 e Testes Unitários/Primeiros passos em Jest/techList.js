function techList(array, name) {
  let dicionario = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let i of array) {
    dicionario.push({
      tech: i,
      name,
    });
  }

  return dicionario;
}

module.exports = techList;