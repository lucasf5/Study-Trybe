// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
function xadrex(nomeDaPeça) {
    nomeDaPeça = nomeDaPeça.toLowerCase();
    switch (nomeDaPeça) {
        case "peao":
            console.log("Os peões se movem somente para frente, uma casa por vez.");
            break;
        case "bispo":
            console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro.");
            break;
        case "torre":
            console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
            break;
        case "cavalo":
            console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.");
            break;
        case "rainha":
            console.log("la pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
            break;
        case "rei":
            console.log("O rei pode se mover para qualquer casa adjacente. ");
            break;
        default:
            console.log("Não existe essa peça");
            break;
    }
}
