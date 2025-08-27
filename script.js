document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.buttons button')
    const tela = document.querySelector('.tela')
    botoes.forEach((btn) => {
        btn.addEventListener('click', ()=>{
            let operacao = [7]
            let numeroAtual = ""
            if(isNaN(btn.textContent)) {
                
            } else {
                numeroAtual += btn.textContent
                console.log(numeroAtual)
            }
            

            if(tela.textContent === '0' && btn.textContent !== "c" && btn.textContent !== ".") {
                tela.textContent = btn.textContent
            } else if(btn.textContent === 'c') {
                tela.textContent = '0'
            } else if(isNaN(btn.textContent) && btn.textContent !== "."){
                tela.textContent = btn.textContent
            } else if(isNaN(tela.textContent)) {
                tela.textContent = btn.textContent
            } else if(btn.textContent === ".") {
                tela.textContent += btn.textContent
            }
            
            else {
                tela.textContent += btn.textContent
               
            }
            
        })
    });
    
    
});
