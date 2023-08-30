class Passaro {
    static elemento = document.querySelector(".passaro");
    static tamanho = 35;
    static posicaoY = 245;
    static posicaoSuperior = this.posicaoY + this.tamanho;
    static posicaoInferior = this.posicaoY;
    static caindo = false;
    static velocidadeQueda = 0.10
    static pulando = false;
    static velocidadePulo = 2.0;
    static tamanhoPulo = 85;
    static rotacao = 0;

    static pular() {
        if (Jogo.iniciado == true) {
            // Define pulando como true
            this.pulando = true;
            // Define posição final do pulo, limitando em 560 - this.tamanho
            var posicaoFinal = (this.posicaoY + this.tamanhoPulo) >= Jogo.alturaJanela - this.tamanho ? Jogo.alturaJanela - this.tamanho : this.posicaoY + this.tamanhoPulo;
            // Inicializa velocidade de pulo como 2;
            this.velocidadePulo = 2.0;
            /* 
            * Intervalo: faz a animação de pulo adicionando 2 de altura por execução até 
            * atingir o valor da variavel posicaoFinal;
            */
            var intervalo = setInterval(() => {
                // Invervalo responsável por animar a rotação do pássaro no momento do pulo
                var rotacao = setInterval(() => {
                    this.rotacao <= 20 ? this.rotacao += 2 : clearInterval(rotacao);
                }, 1);
                // redefine velocidade de queda para 0.15;
                this.velocidadeQueda = 0.15;
                // Incrementa velocidade a cada execução (aceleração)
                this.velocidadePulo -= 0.010;
                // Adiciona altura
                this.posicaoY += this.velocidadePulo;
                // Chama o método para atualizar a posicao se ela ainda não atingiu posicaoFinal
                this.atualizarPosicao();
                // this.posicaoY >= 654 ? null : this.atualizarPosicao();
                // Finaliza o intervalo se a posicao atingiu posicaoFinal
                if (this.posicaoY >= posicaoFinal) {
                    // Habilita queda do pássaro se estiver desabilitada
                    this.caindo == false ? this.cair() : null;
                    // Se o pássaro atinge o teto da fase ele morre
                    // this.posicaoY >= 560 - this.tamanho ? this.morrer() : null;
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
                // Rotaciona o pássaro em direção ao chão enquanto ele estiver caindo;
                if (this.velocidadeQueda > 1.5)
                    this.rotacao >= -85 ? this.rotacao-- : null;
                // Enquanto a posicao do passaro for > -8, aceleradamente cai em direção ao chão da fase
                if (this.posicaoY > -1) {
                    // Aceleração de queda: aumenta a velocidade de queda a cada execução
                    this.velocidadeQueda += 0.02
                    // Muda a posicao de acordo com a aceleracao this.velocidadeQueda
                    this.posicaoY -= this.velocidadeQueda
                    // atualiza posicao a cada execução
                    this.atualizarPosicao()
                } else {
                    // Se o pássaro atingir posicao 0 (chão da fase) ele morre
                    this.morrer();
                    // redefine velocidade de queda para 0.15;
                    this.velocidadeQueda = 0.15
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

    static animar() {
        console.log("animar")
        var imagemVoo = 1;
        var intervalo = setInterval(() => {
            if (this.elemento.children[0].src != `src/img/konami.png`) {
                this.elemento.children[0].src = `src/img/bird_${imagemVoo}.png`
                imagemVoo >= 3 ? imagemVoo = 1 : imagemVoo++;
            }
            if (Jogo.iniciado == false)
                clearInterval(intervalo)
        }, 120);
    }

    static atualizarPosicao() {
        // Atualiza a posição Y do pássaro
        this.elemento.style.bottom = `${this.posicaoY}px`;
        // Atualiza dados das hitboxes
        this.posicaoSuperior = this.posicaoY + this.tamanho;
        this.posicaoInferior = this.posicaoY;
        // Atualiza o valor de rotação do pássaro
        this.elemento.children[0].style = `transform: rotate(${this.rotacao}deg)`
    }
}