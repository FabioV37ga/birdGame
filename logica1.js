document.querySelector("body").addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        Bird.jump()
    }
})