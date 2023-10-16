function verificaChuteValido(chute){
    const numero = +chute;
    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(chuteDoUsuario(numero)){
       elementoChute.innerHTML += `<div>Valor invalido: não está entre o ${menorValor} e ${maiorValor}</div>`;
       return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2>Parabéns</h2>
         <h3>O numero secreto é ${numeroSecreto}</h3>
         <button id ="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteDoUsuario(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})


