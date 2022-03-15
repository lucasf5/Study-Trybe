//! Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const body = document.querySelector("body")
const h1 = document.createElement("h1")

h1.innerText = "Exercício 5.2 - JavaScript DOM"

body.appendChild(h1)

//! Adicione a tag main com a classe main-content como filho da tag body;

const main = document.createElement("main")
main.classList = "main-content"

body.appendChild(main)

//! Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const section = document.createElement("section")
section.classList = "center-content"

main.appendChild(section)

//! Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const p = document.createElement("p")

section.appendChild(p)

//! Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionLeft = document.createElement("section")
sectionLeft.classList = "left-content"

main.appendChild(sectionLeft)

//! Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const sectionRight = document.createElement("section")
sectionRight.classList = "right-content"

main.appendChild(sectionRight)

//! Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement("img")
img.src = "https://picsum.photos/200"

sectionLeft.appendChild(img)

//! Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let lista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]

const listaNaoOrdenada = document.createElement("ul")

for (let i of lista) {
    const li = document.createElement("li")
    li.innerText = i
    listaNaoOrdenada.appendChild(li)
}

sectionRight.appendChild(listaNaoOrdenada)

//! Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let i = 0; i < 3; i++){
    const h3 = document.createElement("h3")
    h3.classList = "description "
    main.appendChild(h3)
}

//! Adicione a classe title na tag h1 criada;
h1.classList.add = "title"

//! Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();

let listaSections = main.childNodes
listaSections.forEach((elemento) => {
    if (elemento.classList.contains("left-content")) {
        main.removeChild(elemento)
    }
})

//! Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
sectionRight.style.marginRight = "auto" 

//! Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
section.style.backgroundColor = "green"

//! Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

listaNaoOrdenada.lastChild.remove()
listaNaoOrdenada.lastChild.remove()


