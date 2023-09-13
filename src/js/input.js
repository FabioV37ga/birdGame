class Input {
    static alvo = document.querySelector("body");
    static atribuir() {
        this.alvo.addEventListener("mousedown", () => { this.usar('pular') });
        this.alvo.addEventListener("touchstart", () => { this.usar('pular') });
        this.alvo.addEventListener("keydown", (e) => { e.keyCode == 32 ? this.usar('pular') : null });
    }

    static usar(acao) {
        // to fix: essa linha faz com que o passaro ainda voe depois de morrer.
        Jogo.iniciado == false && Passaro.estado == 'vivo' ? Jogo.iniciar() : null;
        // Jogo.iniciado == false && Passaro.estado == 'morto' ? Jogo.reiniciar() : null;
        if (Jogo.iniciado == true)
            switch (acao) {
                case 'pular':
                    // console.log("pular")
                    Passaro.pular()
                    break
            }
    }

}