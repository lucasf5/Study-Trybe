const spring = ["OUT", "NOV", "DEZ"];
const summer = ["JAN", "FEV", "MAR"];
const fall = ["ABR", "MAI", "JUN"];
const winter = ["JUL", "AGO", "SET"];

const months = [...summer, ...fall, ...winter, ...spring];

const people = {
  id: 101,
  name: "Alysson",
  age: 25,
};

const about = {
  address: "Av. Getúlio Vargas, 1000",
  occupation: "Developer",
};

const customer = { ...people, ...about, carro: "Gol" };

// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Coco', 'Uva', 'Limão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
