// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const horas = Math.floor(Math.random() * 24);
const currentHour = horas;
// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
let message = "";
// Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
if (horas >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
else if (horas >= 18 && horas < 22) {
    message = "Rango da noite, vamos jantar :D";
}
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
else if (horas >= 14 && horas < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
else if (horas >= 11 && horas < 14) {
    message = "Hora do almoço!!!";
}
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
// Agora imprima a variável message fora das suas condições.
else if (horas >= 4 && horas < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
else {
    message = "Nada por aqui!";
}
// OR
// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
const weekDay = "segunda-feira";
if (weekDay == ("segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira")) {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}
