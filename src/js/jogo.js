class Jogo {
    static alturaJanela = 560;
    static iniciado = false;
    static elementoChao = document.querySelector(".chao");
    static pontuacao;

    static iniciar() {
        // Inicia o jogo
        if (this.iniciado == false) {
            this.iniciado = true;
            console.log("jogo.iniciar");
            // Chama moverChao()
            this.moverChao()
            Passaro.animar()
        }
    }

    static moverChao() {
        // Movimenta o chão da fase para a esquerda continuamente até que o jogo seja finalizado
        // Variável contadora
        var posicaoChao = 0;
        // Intervalo responsável por mover o chão
        var intervalo = setInterval(() => {
            posicaoChao -= .75;
            // Atribui posição = posicaoChao px
            this.elementoChao.style.backgroundPositionX = `${posicaoChao}px`
            // Se o jogo for finalizado, finaliza o loop
            if (Jogo.iniciado == false) {
                clearInterval(intervalo);
            }
        }, 1);
    }

    static finalizar() {
        // Finaliza o jogo
        Passaro.estado == 'morto' ? Jogo.iniciado = false : null;
        console.log("finalizar jogo")
    }

    static reiniciar(){
        console.log("reiniciar...")
        setTimeout(() => {
            Passaro.estado = 'vivo';
        }, 250);
    }
}