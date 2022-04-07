const wakeUp = () =>{
    return "Acordando!!"
}

const coffee = () =>{
    return 'Bora tomar café!!';
}

const slepp = () => {
    return 'Partiu dormir!!';
}

const doingThings = (func)=>{
    console.log(func());
}

doingThings(slepp)