class Pipe {
    static gap = [0, 0];
    static id = 0;
    static range = [470, 170];
    static jquery = `<div class="pipe pipemove">
    <img src="src/img/pipes.png" draggable="false">
    </div>`
    id;
    elemento;
    posicaoY;

    constructor() {
        this.criar()
        this.atribuir();
        this.posicionarY();
        this.moverX();
    }

    criar() {
        $(".pipes").append(Pipe.jquery)
        this.id = Pipe.id;
        Pipe.id++;
    }

    // range -470 → -170
    atribuir() {
        var elementoHtml = document.querySelectorAll(".pipemove");
        this.elemento = elementoHtml[elementoHtml.length - 1];
        this.elemento.setAttribute("value", this.id)
    }

    posicionarY() {
        this.posicaoY = Math.floor(Math.random() * (Pipe.range[1] - Pipe.range[0]) + Pipe.range[0])
        this.elemento.style.bottom = `${this.posicaoY}px`
        // console.log(this.elemento.style.bottom)
        // console.log(Pipe.gap)

    }

    moverX() {
        var posicaoX = -86;
        var intervalo = setInterval(() => {
            posicaoX += 0.75;
            this.elemento.style.right = `${posicaoX}px`
            // range para verificar colisao
            // Math.trunc(posicaoX) % 2 == 0 &&
            Math.trunc(posicaoX) == 184 ? Pipe.gap = [this.posicaoY - 107, (this.posicaoY - 107) + 113]: null;
            Math.trunc(posicaoX) == 186 ? Jogo.pontuar() : null;
            posicaoX >= 185 && posicaoX <= 320 ? Jogo.verificarColisao() : null;
            // console.log(Pipe.gap)
            // Condicoes para finalizar o intervalo
            // 1. Caso o cano chegue do outro lado da tela
            posicaoX >= 483 ? clearInterval(intervalo) + this.apagar() : null;
            // 2. Caso o jogo seja finalizado no meio da animação
            Jogo.iniciado == true ? null : clearInterval(intervalo)
        }, 1);
    }

    apagar() {
        // console.log(`remove \n${this.elemento}`)
        this.elemento.remove()
    }

    static apagar() {
        var elementoHtml = document.querySelectorAll(".pipemove");
        for (let i = 0; i <= elementoHtml.length - 1; i++) {
            elementoHtml[i].remove()
        }
    }





}