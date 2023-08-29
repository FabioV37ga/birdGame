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

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () { 
    document.querySelector(".passaro").children[0].src = 'src/img/konami.png' 

})

