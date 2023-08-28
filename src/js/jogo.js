class Jogo {
    static iniciado = false;
    static elementoChao = document.querySelector(".chao");

    static iniciar() {
        if (this.iniciado == false) {
            this.iniciado = true;
            console.log("jogo.iniciar");
            this.moverChao()
        }
    }

    static moverChao() {
        var contador = 0;
        var invervalo = setInterval(() => {
            console.log("teste")
            contador -= .75;
            this.elementoChao.style.backgroundPositionX = `${contador}px`
        }, 1);
    }
}