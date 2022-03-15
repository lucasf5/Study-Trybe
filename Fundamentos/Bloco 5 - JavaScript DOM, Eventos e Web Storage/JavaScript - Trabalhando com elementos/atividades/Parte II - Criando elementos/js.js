// Crie um irmão para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta")
const pai = elementoOndeVoceEsta.parentElement

// Crie um filho para elementoOndeVoceEsta.
const filho = document.createElement("section")
filho.classList.add("quintoFilho")
pai.appendChild(filho)

// Crie um filho para primeiroFilhoDoFilho.
const filhoDoFilho = elementoOndeVoceEsta.firstElementChild
const filhoDoFilhoDoFilho = document.createElement("section")
filhoDoFilhoDoFilho.classList.add("filhofilhofilho")
filhoDoFilho.appendChild(filhoDoFilhoDoFilho)

// A partir desse filho criado, acesse terceiroFilho.
const filhoDoFilhoDoFilhodoFilho = filhoDoFilho.firstChild
console.log(filhoDoFilhoDoFilhodoFilho);