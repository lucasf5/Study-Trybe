const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (sayHello) => {
    console.log(sayHello());
}

printGreeting(sayHello);