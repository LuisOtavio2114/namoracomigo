function sim() {
    alert("euteamoteamoteamoteamoteamo");
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute'
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("esquiva!...");
}
randomNumber(0, 100);

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}