const oyuncu = document.getElementById("oyuncu");
const engel = document.getElementById("engel");
const kus_engel = document.getElementById("kus_engel");
let score = document.getElementById("score");


let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = 'Score ' + playerScore;

}
invertal = setInterval(scoreCounter, 200);

function zipla() {

    if (engel.classList != "engel-animate") {
        engel.classList.add("engel-animate");
    }
    if (kus_engel.classList != "kus_engel-animate") {
        kus_engel.classList.add("kus_engel-animate");
    }
    if (oyuncu.classList != "oyuncu-animate") {
        oyuncu.classList.add("oyuncu-animate");
        setTimeout(function() {
            oyuncu.classList.remove("oyuncu-animate");
        }, 500);
    }
}
var carpismaKOntrol = setInterval(function() {

    var oyuncuBottom = parseInt(window
        .getComputedStyle(oyuncu)
        .getPropertyValue("bottom"));
    var engelLeft = parseInt(window
        .getComputedStyle(engel)
        .getPropertyValue("left"));
    var kus_engelLeft = parseInt(window
        .getComputedStyle(kus_engel)
        .getPropertyValue("left"));

    if (engelLeft > 0 && engelLeft < 70 && oyuncuBottom < 70) {

        engel.classList.remove("engel-animate");
        engel.style.display = "none";
        alert("GAME OVER");
    }
    if (kus_engelLeft > 0 && kus_engelLeft < 50 && oyuncuBottom < 50) {

        kus_engel.classList.remove("kus_engel-animate");
        kus_engel.style.display = "none";
        alert("GAME OVER");

    }
}, 10);