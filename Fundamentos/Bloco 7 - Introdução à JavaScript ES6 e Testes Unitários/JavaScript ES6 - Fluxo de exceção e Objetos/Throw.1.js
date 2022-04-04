function frase (string){
    const fraseSeparada = string.split('')
    
    fraseSeparada.forEach((item)=>{
        if(typeof item !== "string"){
            throw new Error(`Existe um numero dentro dessa frase.`)
        }
    })

}  

function verifica(string){
    try {
        frase(string)
        return "Todas as letras são string!"
    } catch (error) {
        throw error.message
    }
}

console.log(verifica(44));