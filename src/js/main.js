// Inicializa registro de pontuação
localStorage.setItem("birdGamePontuacao",
    localStorage.getItem("birdGamePontuacao") == null ? 0 : localStorage.getItem("birdGamePontuacao")
)
// Atribui teclas para as funções do jogo
Input.atribuir()

// easterEgg (ler o código fonte pra descobrir se tem easter eggs é roubar, volte para o jogo.)
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
    document.querySelector(".passaro").children[0].children[0].src = 'src/img/konami.png'
})

