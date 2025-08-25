document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.buttons button')
    const tela = document.querySelector('.tela')
    botoes.forEach((btn) => {
        btn.addEventListener('click', ()=>{
            let operacao = []
            let numeroAtual = ""
            if(isNaN(btn.textContent)) {
                operacao = btn.textContent
            } else {
                numeroAtual += btn.textContent
                console.log(numeroAtual)
            }
            

            if(tela.textContent === '0') {
                tela.textContent = btn.textContent
            } else if(btn.textContent === 'c') {
                tela.textContent = '0'
            } else {
                tela.textContent += btn.textContent
            }
            
        })
    });
    
    
});
