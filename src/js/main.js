document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        Jogo.iniciar()
        Passaro.pular();
    }
})

document.querySelector("body").addEventListener("click", function () {
    Jogo.iniciar()
    Passaro.pular();
})

