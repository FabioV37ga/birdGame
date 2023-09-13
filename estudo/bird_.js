class Bird {
    static elementoBird = document.querySelector(".slider")
    static posY = 0;
    static jumpState = 0;
    static fallState = 0;

    static jump() {

        if (this.jumpState == 0) {
            console.log("bird.jump");
            if (this.posY + 75 <= 392) {
                this.jumpState = 1;
                var teto = this.posY + 75;
                var intervalo = setInterval(() => {
                    this.posY += 2
                    this.atualizarPosicao()
                    if (this.posY >= teto) {
                        this.fallState == 0 ? this.fall() : null;
                        clearInterval(intervalo);
                        this.jumpState = 0
                    }
                }, 1);
            } else if (this.posY <= 392) {
                this.jumpState = 1
                var intervalo = setInterval(() => {
                    this.posY++
                    this.atualizarPosicao();
                    if (this.posY >= 392) {
                        this.fallState == 0 ? this.fall() : null;
                        clearInterval(intervalo)
                        this.jumpState = 0
                        console.log("Acertou teto.")
                    }
                }, 1);
            }
        } else {
            console.log("bird.jump cooldown!")
        }
    }

    static fall() {
        this.fallState = 1;
        var intervalo = setInterval(() => {
            if (this.jumpState == 0) {
                if (this.posY > 0) {
                    this.posY -= 0.5
                    this.atualizarPosicao()
                }
            }
        }, 1);
    }

    static atualizarPosicao() {
        this.elementoBird.style.bottom = `${this.posY}px`;
    }
}