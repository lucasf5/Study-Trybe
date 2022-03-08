let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 150, 35, 27];


let valor = 0

for (let i of numbers) {
    if (i > valor) {
        valor = i
    }
}
console.log(valor);

let itemMinimo = numbers[0]

for (let i of numbers) {
    if (i < itemMinimo) {
        itemMinimo = i
    }
}
console.log(itemMinimo);