const numbers = [11, 24, 39, 47, 50, 62, 75, "81", 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);
const filter = numbers.filter((num) => num > 50);
// const fill = numbers.fill(1)
const map = numbers.map((num) => num * 2);
const every = numbers.every((num) => typeof num === "number");
const some = numbers.some((num) => num > 12);

console.log(filter);
// console.log(fill);
console.log(map);
console.log(every);
console.log(some);

// Dois jeitos para usar só no findIndex
const find = numbers.find(num => typeof num === "string")
const index = numbers.indexOf(find)

const array = numbers.findIndex(num => typeof num === "string")

console.log(numbers[index]);

