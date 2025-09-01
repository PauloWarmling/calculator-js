let a = null
let b = null
let operacao = null
let resultado = null

document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.buttons button')
    const tela = document.querySelector('.tela')
    botoes.forEach((btn) => {
        btn.addEventListener('click', ()=>{
            if(!isNaN(btn.textContent)) {
                handleNumber(btn.textContent)  
            } else {
                handleSymbol(btn.textContent)
            }
        })
    });
    
    function handleNumber(number){
        if(!isNaN(resultado) && resultado !== null){
            tela.textContent = number
            resultado = null
        } else if(tela.textContent === "0" && number !== "."){
            tela.textContent = number
        } else if(isNaN(tela.textContent)) {
            tela.textContent = number
        } else if(!isNaN(tela.textContent) || number === "." || !isNaN(number)) {
            tela.textContent += number
        } 
    }

    function handleSymbol(symbol) {
        if(symbol === "c"){
            tela.textContent = "0"
            a = null
            b = null
            operacao = null
            resultado = null
        } else if(symbol === "=") {
            if(a !== null && operacao !== null) {
                b = Number(tela.textContent)
                tela.textContent = handleMath(a, b, operacao)
                a = Number(tela.textContent)
                b = null
                operacao = null
            }
            handleMath(a, b, operacao)
        } else if(symbol === "."){
            handleNumber(symbol)
        } else {
            a = Number(tela.textContent)
            operacao = symbol
            tela.textContent = symbol
        }
    }

    function handleMath(a, b, operacao) {
        switch (operacao) {
            case "+": 
                resultado = a + b
                return resultado
            case "-":
                resultado = a - b
                return resultado
            case "x":
                resultado = a * b
                return resultado
            case "/": 
                b === 0 ? resultado = "Erro" : resultado = a / b
                return resultado
        }
    }
    
});