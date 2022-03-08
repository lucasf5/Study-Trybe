// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// FOREACH
groceryList.forEach((item) => {
    console.log(item);
})

// FOR
for (let i = 0; i < groceryList.length; i++){
    console.log(groceryList[i]);
}

// FOR/OF

for (let item of groceryList) {
    console.log(item);
}

// Exercício 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let item of names) {
    console.log(item);
}
