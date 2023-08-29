var start = false;

// Input SPACEBAR
document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        // Se o jogo ainda não foi iniciado, inicia.
        if (start == false) {
            start = true
            Jogo.iniciar()
        }
        // Faz o pássaro pular
        Passaro.pular();
    }
})

// Input MOUSEDOWN
document.querySelector("body").addEventListener("mousedown", function () {
    // Se o jogo ainda não foi iniciado, inicia.
    if (start == false) {
        start = true
        Jogo.iniciar()
    }
    // Faz o pássaro pular
    Passaro.pular();
})

