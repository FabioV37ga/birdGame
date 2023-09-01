class Input {
    static alvo = document.querySelector("body");
    static atribuir() {
        this.alvo.addEventListener("mousedown", () => { this.usar('pular') });
        this.alvo.addEventListener("keydown", (e) => { e.keyCode == 32 ? this.usar('pular') : null });
    }

    static usar(acao) {
        Jogo.iniciado == false ? Jogo.iniciar() : null;
        switch (acao) {
            case 'pular':
                console.log("pular")
                Passaro.pular()
                break
        }
    }

}