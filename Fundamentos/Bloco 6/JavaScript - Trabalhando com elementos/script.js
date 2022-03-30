const a = document.querySelector("a")
// link
console.log(a.parentNode) //li -> Pai dele
console.log(a.parentElement); //li

const li = document.querySelector(".links")
// links
console.log(li.parentNode); //ul.lista1
console.log(li.childNodes); //NodeList [a.link]
console.log(li.children); //HTMLCollection [a.link]

const ul = document.querySelector(".lista1")
// Conta quantos elementos filhos a UL tem
//! childElementCount
console.log(ul.childElementCount);

// Retorna um array com todos os filhos da ul
//! children 
console.log(ul.children) //HTMLCollection(5) [li.links, li.links, li.links, li.links, li.links]

//! parentNode 
console.log(ul.parentNode); //nav.navbar

//! parentElement
console.log(ul.parentElement); //nav.navbar

//! firstChild 
// Retorna o primeiro filho(nó) direto e não necessáriamente é o elemento
console.log(ul.firstChild); //#text

//! lastchild 
console.log(ul.firstChild); //#text

// Retorna o primeiro filho direto e necessáriamente é o elemento
//! firstElementChild 
console.log(ul.firstElementChild); //li.links
 
const navbar = document.querySelector("nav")
//! lastElementChild 
console.log(navbar.lastElementChild); //ul.lista2
 
// Retorna o próximo nó e não necessáriamente é o elemento
//! nextSibling
console.log(ul.nextSibling);

// Retorna o próximo elemento e necessáriamente é um elemento
//! nextElementSibling
console.log(ul.nextElementSibling);

// Retorna o nó anterior direto e não necessáriamente é o elemento
//! previousSibling
console.log(ul.previousSibling);

// Retorna o elemento anterior e necessáriamente é um elemento
//! previousElementSibling
console.log(ul.previousElementSibling);