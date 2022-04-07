const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  } else {
    console.log(number, 'is odd');
  }
}

repeat(5, isEven);

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());