document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        Passaro.pular();
        Jogo.iniciar()
    }
})

document.querySelector("body").addEventListener("click", function () {
    Passaro.pular();
    Jogo.iniciar()
})