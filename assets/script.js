var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Leonardo.style = "display:none";
    Bruna.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top: 40%";
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex";
    Bruna.style = "display:none";
    setaDireita.style = "display:flex; margin-top: 40%";
    setaEsquerda.style = "display:none";
}
