class Pipe {
    static id = 0;
    static range = [-470, -170];
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
        this.elemento.style.top = `${this.posicaoY}px`
        // console.log(this.elemento.style.top)
    }

    moverX() {
        var posicaoX = -86;
        var intervalo = setInterval(() => {
            posicaoX += 0.75;
            this.elemento.style.right = `${posicaoX}px`
            // Condicoes para finalizar o intervalo
            // 1. Caso o cano chegue do outro lado da tela
            posicaoX >= 483 ? clearInterval(intervalo) + this.apagar() : null;
            // 2. Caso o jogo seja finalizado no meio da animação
            Jogo.iniciado == true ? null : clearInterval(intervalo)
        }, 1);
    }

    apagar() {
        console.log(`remove \n${this.elemento}`)
        this.elemento.remove()
    }

    static apagar() {
        var elementoHtml = document.querySelectorAll(".pipemove");
        for (let i = 0; i <= elementoHtml.length - 1; i++){
            elementoHtml[i].remove()
        }
    }





}