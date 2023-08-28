class Passaro {
    static elemento = document.querySelector(".slider");
    static tamanho = 8;
    static posicaoY = 0;
    static pulando = false;
    static caindo = false;
    static velocidade = 0.5

    static pular() {
        if (this.pulando == false) {
            // Define pulando como true
            this.pulando = true;
            // Define posição final do pulo, limitando em 400 - this.tamanho
            var posicaoFinal = (this.posicaoY + 100) >= 400 - this.tamanho ? 400 - this.tamanho : this.posicaoY + 100;
            /* 
            * Intervalo: faz a animação de pulo adicionando 2 de altura por execução até 
            * atingir o valor da variavel posicaoFinal;
            */
            var intervalo = setInterval(() => {
                // redefine velocidade de queda para 0.5;
                this.velocidade = 0.5;
                // Adiciona altura
                this.posicaoY += 2;
                // Chama o método para atualizar a posicao se ela ainda não atingiu posicaoFinal
                this.posicaoY >= 394 ? null : this.atualizarPosicao();
                // Finaliza o intervalo se a posicao atingiu posicaoFinal
                if (this.posicaoY >= posicaoFinal) {
                    // Habilita queda do pássaro se estiver desabilitada
                    this.caindo == false ? this.cair() : null;
                    // Se o pássaro atinge o teto da fase ele morre
                    this.posicaoY >= 400 - this.tamanho ? this.morrer() : null;
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
                // Enquanto a posicao do passaro for > 0, diminui 0.5 a cada execução
                if (this.posicaoY > 0) {
                    // Aceleração de queda: aumenta a velocidade de queda a cada execução
                    this.velocidade += 0.009
                    // Muda a posicao de acordo com a aceleracao this.velocidade
                    this.posicaoY -= this.velocidade
                    // atualiza posicao a cada execução
                    this.atualizarPosicao()
                    // Se o pássaro atingir posicao 0 (chão da fase) ele morre
                } else {
                    this.velocidade = 0.5
                    // ...
                    this.morrer();
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
    }

    static atualizarPosicao() {
        this.elemento.style.bottom = `${this.posicaoY}px`;
    }
}
