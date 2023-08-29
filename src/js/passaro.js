class Passaro {
    static elemento = document.querySelector(".passaro");
    static tamanho = 58;
    static posicaoY = 290;
    static pulando = false;
    static caindo = false;
    static velocidadeQueda = 0.35
    static velocidadePulo;
    static rotacao = 0;

    static pular() {
        if (this.pulando == false && Jogo.iniciado == true) {
            // Define pulando como true
            this.pulando = true;
            // Define posição final do pulo, limitando em 560 - this.tamanho
            var posicaoFinal = (this.posicaoY + 100) >= 560 - this.tamanho ? 560 - this.tamanho : this.posicaoY + 100;
            // Inicializa velocidade de pulo como 2;
            this.velocidadePulo = 3.5;
            /* 
            * Intervalo: faz a animação de pulo adicionando 2 de altura por execução até 
            * atingir o valor da variavel posicaoFinal;
            */
            var intervalo = setInterval(() => {
                this.rotacao <= 45 ? this.rotacao++ : null;
                // redefine velocidade de queda para 0.35;
                this.velocidadeQueda = 0.35;
                // Incrementa velocidade a cada execução (aceleração)
                this.velocidadePulo -= 0.02
                console.log(this.velocidadePulo)
                // Adiciona altura
                this.posicaoY += this.velocidadePulo;
                // console.log(this.velocidadePulo)
                // Chama o método para atualizar a posicao se ela ainda não atingiu posicaoFinal
                this.posicaoY >= 654 ? null : this.atualizarPosicao();
                // Finaliza o intervalo se a posicao atingiu posicaoFinal
                if (this.posicaoY >= posicaoFinal) {
                    // Habilita queda do pássaro se estiver desabilitada
                    this.caindo == false ? this.cair() : null;
                    // Se o pássaro atinge o teto da fase ele morre
                    this.posicaoY >= 560 - this.tamanho ? this.morrer() : null;
                    // Define pulando como falso
                    this.pulando = false;
                    // Limpa o intervalo
                    clearInterval(intervalo);
                }
            }, 1);
        }
    }

    static cair() {
        // Define caindo como true
        this.caindo = true;
        // Intervalo: enquanto this.pulando for false move o pássaro em direção ao chão, com
        // limite 0px
        var intervalo = setInterval(() => {
            if (this.pulando == false) {
                // Enquanto a posicao do passaro for > 0, aceleradamente cai em direção ao chão da fase
                if (this.posicaoY > 0) {
                    // Aceleração de queda: aumenta a velocidade de queda a cada execução
                    this.velocidadeQueda += 0.015
                    // Muda a posicao de acordo com a aceleracao this.velocidadeQueda
                    this.posicaoY -= this.velocidadeQueda
                    // atualiza posicao a cada execução
                    this.atualizarPosicao()
                } else {
                    // Se o pássaro atingir posicao 0 (chão da fase) ele morre
                    this.morrer();
                    // redefine velocidade de queda para 0.35;
                    this.velocidadeQueda = 0.35
                    // define caindo como false
                    this.caindo = false;
                    // Limpa o intervalo;
                    clearInterval(intervalo)
                }
            }
        }, 1);
    }

    static morrer() {
        console.log("morrer")
        Jogo.finalizar()
    }

    static atualizarPosicao() {
        this.elemento.style.bottom = `${this.posicaoY}px`;
        this.elemento.children[0].style = `transform: rotate(${this.rotacao}deg)`
    }
}