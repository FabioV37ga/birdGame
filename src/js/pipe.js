class Pipe {
    static range = [-470, -170];
    id;
    elemento;
    posicaoY;

    constructor() {
        Pipe.atribuir();
        document.querySelector(".pipemove").addEventListener("animationiteration", Pipe.atribuir)
    }

    // range -470 → -170
    static atribuir() {
        this.id = document.querySelectorAll(".pipe").length - 1;
        this.posicaoY = Math.floor(Math.random() * (Pipe.range[1] - Pipe.range[0]) + Pipe.range[0])
        this.elemento = document.querySelectorAll(".pipe")[this.id]
        this.elemento.style.top = `${this.posicaoY}px`
        Pipe.atualizarPosicao()
    }

    static atualizarPosicao() {
        console.log(this.elemento.style.top)

    }



}