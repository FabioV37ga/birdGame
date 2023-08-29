var start = false;

document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        if (start == false) {
            start = true
            Jogo.iniciar()
        }
        Passaro.pular();
    }
})

document.querySelector("body").addEventListener("mousedown", function () {
    if (start == false) {
        start = true
        Jogo.iniciar()
    }
    Passaro.pular();
})

