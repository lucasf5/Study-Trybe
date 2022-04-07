// Q1
const newEmployees = (registro) => {
  const employees = {
    id1: registro("Pedro Guerra"), 
    id2: registro("Luiza Drumond"), 
    id3: registro("Carla Paiva"),
  }
  return employees;
};
const registro = (nome) => {
    const string = nome.replace(' ', "_").toLowerCase()
    return {
    nome,
    email: string + "@trybe.com"
  }
};

console.log(newEmployees(registro));

// Q2
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

// Q3
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