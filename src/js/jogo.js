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
            // console.log("hit!!!!")
        }
    }

    static pontuar(e) {
        e != null ? Jogo.pontuacao += e : Jogo.pontuacao++
        if (parseInt(localStorage.getItem("birdGamePontuacao")) < Jogo.pontuacao) {
            localStorage.setItem("birdGamePontuacao", Jogo.pontuacao)
            Jogo.pontuacaoRecord = Jogo.pontuacao
        }
        document.querySelector(".pontuacao-valor").textContent = Jogo.pontuacao;
        // console.log(parseInt(localStorage.getItem("birdGamePontuacao")))
        // console.log(Jogo.pontuacao)
    }

    static finalizar() {
        // Finaliza o jogo
        if (Passaro.estado == 'morto' && Jogo.iniciado == true) {
            Jogo.iniciado = false
            $(".pontuacao-valor")[0].style.display = "none"
            $(".displaypoint")[0].textContent = Jogo.pontuacao;
            $(".displaypoint")[1].textContent = Jogo.pontuacaoRecord;
            // Pisca a tela quando o passaro morrer
            var tela = document.querySelector(".filter")
            tela.addEventListener("animationend", piscar)
            tela.classList.add("passaro-morre")
            function piscar() {
                tela.classList.remove("passaro-morre")
                tela.removeEventListener("animationend", piscar)
                Jogo.jogarNovamente();
            }
        }
    }

    static jogarNovamente() {
        var playAgain = document.querySelector(".restart")
        playAgain.style.display = "initial"
        setTimeout(() => {
            playAgain.addEventListener("click", handle)
            function handle() {
                Jogo.reiniciar()
                $(".pontuacao-valor")[0].style.display = "initial"
                playAgain.style.display = "none"
                playAgain.removeEventListener("click", handle)
            }
        }, 800);
    }

    static reiniciar() {
        console.log("jogo.reiniciar")
        Jogo.pontuacao = 0;
        document.querySelector(".pontuacao-valor").textContent = Jogo.pontuacao;
        Pipe.apagar()
        Passaro.estado = 'vivo';
        Passaro.posicaoY = 240;
        Passaro.rotacao = 0
        Passaro.atualizarPosicao()
    }
}