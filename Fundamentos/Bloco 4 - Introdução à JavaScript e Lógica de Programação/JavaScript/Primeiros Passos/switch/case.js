// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista de espera' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista de espera' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
let nota = "aprovada";
switch (nota) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    case "lista de espera":
        console.log("Você está na nossa lista de espera");
        break;
    default:
        break;
}
