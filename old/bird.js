class Bird {
    static elementoBird = document.querySelector(".slider")
    static posY = 0;
    static jumpState = 0;

    static jump() {
        console.log("bird.jump");

        var contador = 0;

        // Movimenta bird no eixo Y 60 unidades para cima com intervalo de tempo
        if (this.posY + 60 <= 392) {
            this.jumpState = 1
            var intervalo = setInterval(() => {
                contador += 2
                this.posY += 2
                this.atualizarPosicao();
                if (contador == 60) {
                    clearInterval(intervalo);
                    this.jumpState = 0
                    Bird.fall()
                }
            }, 1);
            // Limita movimentação no eixo Y mantendo animação
        } else if (this.posY != 392) {
            this.jumpState = 1
            var intervalo = setInterval(() => {
                contador += 2
                this.posY++
                this.atualizarPosicao();
                if (this.posY == 392) {
                    clearInterval(intervalo)
                    this.jumpState = 0
                    Bird.fall()
                }
            }, 1);
        }
    }

    static fall() {
        var intervalo = setInterval(() => {
            if (this.fallState == 1) {
                if (this.posY > 0) {
                    this.posY--
                }
            }
        }, 1);
    }

    static atualizarPosicao() {
        this.elementoBird.style.bottom = `${this.posY}px`;
    }
}