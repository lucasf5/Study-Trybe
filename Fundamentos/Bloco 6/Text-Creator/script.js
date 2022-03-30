const texto = document.querySelector(".btn")
const controles = document.querySelector("#controles")
const cssText = document.querySelector(".css");

function HouveMudanca(evento){
    const nome = evento.target.name
    const valor = evento.target.value
    obj[nome](valor)

    saveItens(nome, valor)
    showCss()
}

const obj = {
    texto(valor) {
        texto.innerHTML = valor
    },
    color(valor) {
        texto.style.color = valor
    },
    height(valor) {
        texto.style.height = valor + "px"
    },
    letterSpacing(valor) {
        texto.style.letterSpacing = valor + "px"
    },
    wordSpacing(valor) {
        texto.style.wordSpacing = valor + "px"
    },
    fontSize(valor) {
        texto.style.fontSize = valor + "px"
    },
    textTransform(valor) {
        texto.style.textTransform = valor
    },
    fontFamily(valor) {
        texto.style.fontFamily = valor
    }
}

function saveItens(nome, valor) {
    localStorage.setItem(nome, valor)
}

function GetItens() {
    const chaves = Object.keys(localStorage)
    chaves.forEach(chave => {
        obj[chave](localStorage[chave])
    })
}
function showCss() {
    cssText.innerHTML = "<span> " + texto.style.cssText.split(";").join(";</span><span>")
}
GetItens()
showCss()

controles.addEventListener("change", HouveMudanca)