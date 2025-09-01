let a = null
let b = null
let operacao = null

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
        if(tela.textContent === "0" && number !== "."){
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
        } else if(symbol === "=") {
            debugger
            if(a !== null && operacao !== null) {
                b = Number(tela.textContent) // pega o segundo número
                tela.textContent = handleMath(a, b, operacao)
                a = Number(tela.textContent) // guarda resultado para continuar
                b = null
                operacao = null
            }
            handleMath(a, b, operacao)
        } else if(symbol === "."){
            handleNumber(symbol)
        } else {
            a = Number(tela.textContent) // guarda primeiro número
            operacao = symbol            // guarda operador
            tela.textContent = symbol    // mostra operador na tela
        }
    }

    function handleMath(a, b, operacao) {
        switch (operacao) {
            case "+": return a + b
            case "-": return a - b
            case "x": return a * b
            case "/": return b === 0 ? "Erro" : a / b
        }
    }
    
});