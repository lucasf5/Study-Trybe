//! Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta")

//! Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentNode; //section#pai
//? pai.nodeName = Section
console.log(pai);
pai.style.color = "red"

//! Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const anterior = elementoOndeVoceEsta.previousElementSibling
anterior.innerHTML = "Adicionando um texto ao elemento!"

//! Acesse o primeiroFilho a partir de pai.
pai.hasChildNodes(primeiroFilho) //true
const filhoDoPai = pai.firstElementChild

//! Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.previousElementSibling);
//! Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling.textContent);
//! Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextElementSibling);
//! Agora acesse o terceiroFilho a partir de pai.
console.log(pai.children[2]);
