class Jogo {
    static alturaJanela = 560;
    static iniciado = false;
    static elementoChao = document.querySelector(".chao");
    static pontuacaoRecord = parseInt(localStorage.getItem("birdGamePontuacao"));
    static pontuacao = 0;

    static iniciar() {
        // Inicia o jogo
        if (this.iniciado == false) {
            console.log("jogo.iniciar");
            this.iniciado = true;
            Pipe.apagar()
            // Chama moverChao()
            this.moverChao()
            Passaro.animar()
            Jogo.gerarCano()
            // var pipe = new Pipe();
        }
    }

    static pontuar() {
        Jogo.pontuacao++
        parseInt(localStorage.getItem("birdGamePontuacao")) < Jogo.pontuacao
            ? localStorage.setItem("birdGamePontuacao", Jogo.pontuacao) : null;
        document.querySelector(".pontuacao-valor").textContent = Jogo.pontuacao;
        console.log(Jogo.pontuacao)
    }

    static gerarCano() {
        var intervalo = setInterval(() => {
            this.iniciado == false ? clearInterval(intervalo) : null;
            var pipe;
            this.iniciado == true ? pipe = new Pipe() : null
        }, 1500);

    }

    static verificarColisao() {
        if (Pipe.gap[0] < Passaro.posicaoInferior &&
            Pipe.gap[1] > Passaro.posicaoInferior) {
        } else {
            Passaro.morrer()
            console.log("hit!!!!")
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
        if (Passaro.estado == 'morto' && Jogo.iniciado == true) {
            Jogo.iniciado = false
            // Pisca a tela quando o passaro morrer
            var tela = document.querySelector(".filter")
            tela.addEventListener("animationend", piscar)
            tela.classList.add("passaro-morre")
            function piscar() {
                tela.classList.remove("passaro-morre")
                tela.removeEventListener("animationend", piscar)
            }
        }
        // Jogo.jogarNovamente();

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