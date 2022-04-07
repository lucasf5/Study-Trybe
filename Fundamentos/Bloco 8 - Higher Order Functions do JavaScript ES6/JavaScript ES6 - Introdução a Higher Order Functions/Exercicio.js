// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (nome) => {
    const string = nome.replace(' ', "-")
  const employees = {
    nome,
    email: string + "@trybe.com"
  }
  return employees;
};

console.log(newEmployees("Lucas Ferreira"));

const numeroAleatorio = () =>{
    return Math.ceil(Math.random() * 5)
}
const checaVitoria = (chute, valorAleatorio) =>{
    const valor = valorAleatorio()
    if(chute === valor){
        console.log("Vitoria!");
    } else {
        console.log("Não foi dessa vez!");
    }
}

checaVitoria(3, numeroAleatorio)


const RIGHT_ANSWERS =   ['A',  'C',  'B', 'D', 'A', 'A',  'D',  'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let notaFinal = 0;
const checaRespostas = (gabarito, respostasEstudante) =>{
    for (let i in gabarito){
        if (gabarito[i] === respostasEstudante[i]){
            notaFinal+=1;
        } else if (respostasEstudante[i] === "N.A"){
            
        } else{
            notaFinal-=0.5
        }
    }
    console.log(notaFinal);
}

checaRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS)