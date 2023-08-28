document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        Passaro.pular();
    }
})

document.querySelector("body").addEventListener("click", function () {
    Passaro.pular();
})