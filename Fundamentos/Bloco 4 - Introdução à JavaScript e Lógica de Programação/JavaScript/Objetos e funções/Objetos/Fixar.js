// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let player = {
    name:'Marta',
    lastName:'Silva',
    age:34,
    medals:{ golden: 2, silver: 3 }
}


player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade, foi eleita a melhor do mundo ${player.bestInTheWorld.length} vezes`);