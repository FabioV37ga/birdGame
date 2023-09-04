class Pipe {
    static range = [-470, -170];
    static jquery = `<div class="pipe pipemove">
    <img src="src/img/pipes.png" alt="" srcset="">
    </div>`
    id;
    elemento;
    posicaoY;

    constructor() {
        Pipe.criar()
        Pipe.atribuir();
    }

    static criar() {
        $(".pipes").append(Pipe.jquery)
    }

    // range -470 → -170
    static atribuir() {
        var pipe = document.querySelectorAll(".pipe").length - 1
        this.id = (pipe) <= 0 ? 0 : pipe;
        this.posicaoY = Math.floor(Math.random() * (Pipe.range[1] - Pipe.range[0]) + Pipe.range[0])
        this.elemento = document.querySelectorAll(".pipemove")[this.id]
        this.elemento.style.top = `${this.posicaoY}px`
        document.querySelector(".pipemove").addEventListener("animationiteration", () => {
            this.elemento.remove()
            var cano = new Pipe();
        })
        Pipe.atualizarPosicao()
    }

    static atualizarPosicao() {
        // console.log(this.elemento.style.top)
    }



}