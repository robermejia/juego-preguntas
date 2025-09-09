const timeElement = document.getElementById("time");

let preg1Element = document.getElementById("answer1");
let preg2Element = document.getElementById("answer2");
let preg3Element = document.getElementById("answer3");
let preg4Element = document.getElementById("answer4");
let preg5Element = document.getElementById("answer5");

let btnFinalizarElement = document.getElementById("btn-finalizar");
let btnVolverIntentarElement = document.getElementById("btn-volverIntentar");

let tiempoRestante = 10;
let intervalo;

function iniciarTemporizador() {
    tiempoRestante = 10;
    timeElement.textContent = tiempoRestante;
    intervalo = setInterval(() => {
        tiempoRestante--;
        timeElement.textContent = tiempoRestante;
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            finalizarJuego(false);
        }
    }, 1000);
}

function finalizarJuego(completado) {
    if (completado) {
        alert("¡Felicidades! Has completado el cuestionario a tiempo." +
            "\nRespuestas:" +
            "\n1. " + preg1Element.value +
            "\n2. " + preg2Element.value +
            "\n3. " + preg3Element.value +
            "\n4. " + preg4Element.value +
            "\n5. " + preg5Element.value);
    } else {
        document.getElementById("audio").play();
        alert("Se ha acabado el tiempo. Inténtalo de nuevo.");
    }
}

btnFinalizarElement.addEventListener("click", () => {
    if (tiempoRestante <= 0) return;
    clearInterval(intervalo);
    const completado = preg1Element.value !== "" &&
        preg2Element.value !== "" &&
        preg3Element.value !== "" &&
        preg4Element.value !== "" &&
        preg5Element.value !== "";
    finalizarJuego(completado);
});

btnVolverIntentarElement.addEventListener("click", () => {
    clearInterval(intervalo);
    preg1Element.value = "";
    preg2Element.value = "";
    preg3Element.value = "";
    preg4Element.value = "";
    preg5Element.value = "";
    iniciarTemporizador();
});

window.onload = iniciarTemporizador;