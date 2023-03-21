const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = geraNumeroAleatório();

const spanMenorValor = document.querySelector('#menor-valor');
const spanMaiorValor = document.querySelector('#maior-valor');

spanMenorValor.innerHTML = menorValor;
spanMaiorValor.innerHTML = maiorValor;

function geraNumeroAleatório() {
    return parseInt(Math.random() * ((maiorValor + 1) - menorValor) + menorValor);
}

console.log(numeroSecreto);