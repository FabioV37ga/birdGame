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
            Jogo.gerarCano()
            // var pipe = new Pipe();
        }
    }

    static gerarCano() {
        var intervalo = setInterval(() => {
            this.iniciado == false ? clearInterval(intervalo) : null;
            var pipe;
            this.iniciado == true ? pipe = new Pipe() : null
        }, 1500);

    }

    static verificarColisao() {
        console.log(Pipe.gap)
        console.log(Passaro.posicaoInferior + ", " + Passaro.posicaoSuperior)
        // console.log(Passaro.posicaoInferior + 35)
        // console.log(Pipe.gap[1])
        // console.log(Passaro.posicaoSuperior + 35 <= Pipe.gap[1])
        if (Pipe.gap[0] < Passaro.posicaoInferior &&
            Pipe.gap[1] > Passaro.posicaoInferior){
            console.log("Teste!")
        }else{
            Passaro.morrer()
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
        console.log("jogo.finalizar")
    }

    static reiniciar() {
        console.log("jogo.reiniciar")
        Pipe.apagar()
        // setTimeout(() => {
        Passaro.estado = 'vivo';
        Passaro.posicaoY = 240;
        Passaro.rotacao = 0
        Passaro.atualizarPosicao()
        // }, 250);
    }
}