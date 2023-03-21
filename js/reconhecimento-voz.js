window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const divChute = document.querySelector('#chute');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(evento) {
    chute = evento.results[0][0].transcript;
    mostraChute(chute);
    verificaValidade(chute);
}

function mostraChute(chute) {
    divChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener("end", () => recognition.start());