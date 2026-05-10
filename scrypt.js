/* ==============================
   CONTROLE DO CARROSSEL
============================== */
let index = 0;
const images = document.querySelectorAll(".carousel img");

function rotateImages() {
    if (images.length > 0) {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }
}

setInterval(rotateImages, 3000);

/* ==============================
   FRASES DIA DAS MÃES
============================== */
const mensagensMae = [
    "Mãe, seu amor é meu maior presente 💖",
    "Tudo que sou devo a você 🌷",
    "Seu abraço é meu lar 🤍",
    "Você é força, amor e cuidado",
    "Obrigado por nunca desistir de mim",
    "Seu sorriso ilumina meus dias ✨",
    "Você é meu exemplo de vida",
    "Seu amor é infinito 💕",
    "Com você aprendi o verdadeiro amor",
    "Feliz Dia das Mães! 🌸"
];

let i1 = 0;
document.getElementById("btn1").onclick = () => {
    alert(mensagensMae[i1]);
    i1 = (i1 + 1) % mensagensMae.length;
};

/* ==============================
   BOTÃO 2 - POP-UP
============================== */
const msgBox = document.getElementById("msgBox");
document.getElementById("btn2").onclick = () => {
    msgBox.style.display = "flex";
};

function closeMsg() {
    msgBox.style.display = "none";
}

/* ==============================
   CONTADOR DE DIAS
============================== */
const nascimento = new Date("2008-06-07");
const hoje = new Date();
const dias = Math.floor((hoje - nascimento) / (1000 * 60 * 60 * 24));

const counter = document.getElementById("daysCounter");
if (counter) {
    counter.innerText = `Já se passaram ${dias} dias desde que eu nasci 💖`;
}

/* ==============================
   (OPCIONAL) CHUVA ROSA
============================== */
const rainContainer = document.getElementById("rain");

if (rainContainer) {
    function createDrop() {
        const drop = document.createElement("div");
        drop.classList.add("drop");

        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
        drop.style.opacity = Math.random() * 0.5 + 0.2;

        rainContainer.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 3000);
    }

    setInterval(createDrop, 100);
}
