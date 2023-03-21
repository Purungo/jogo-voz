function verificaValidade(chute) {
    const numero = +chute;
    if (Number.isNaN(numero)) {
        divChute.innerHTML += `<div>Valor inválido!</div>`;
        return
    }
    if (numero < menorValor || numero > maiorValor) {
        divChute.innerHTML += `<div>Valor inválido! O chute precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
        return
    }

    if (chute == numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabens, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>
        `
    } else if (chute < numeroSecreto) {
        divChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else {
        divChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
}