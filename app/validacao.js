function verificaSeChutePossuiValorValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';

    }

    if(numeroMaiorOuMenorQuePermitido(numero)){
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div> 
            `

    }else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div> 
            `

    }

}

function chuteInvalido(numero){
    return Number.isNaN(numero);

}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor;

}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();

    }

})
