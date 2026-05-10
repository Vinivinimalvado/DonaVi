/* CARROSSEL */
const images = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 3000);

/* FRASES DIA DAS MÃES */
const frases = [
    "Mãe, seu amor é meu maior presente 💖",
    "Tudo que sou devo a você, mãe 🌷",
    "Seu abraço é meu lar 🤍",
    "Você é força, amor e cuidado em uma só pessoa",
    "Obrigado por nunca desistir de mim",
    "Seu sorriso ilumina meus dias ✨",
    "Mãe, você é meu exemplo de vida",
    "Seu amor é infinito 💕",
    "Com você aprendi o verdadeiro amor",
    "Feliz Dia das Mães! 🌸"
];

/* CONTADOR DE DIAS */
const nascimento = new Date("2008-06-07");
const hoje = new Date();
const dias = Math.floor((hoje - nascimento) / (1000 * 60 * 60 * 24));
document.getElementById("daysCounter").innerText =
    `Já se passaram ${dias} dias desde que eu nasci 💖`;

/* BOTÕES */
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const msgBox = document.getElementById("msgBox");
const msgTitle = document.getElementById("msgTitle");
const msgText = document.getElementById("msgText");

btn1.onclick = () => {
    msgTitle.innerText = "Para você, mãe 💐";
    msgText.innerText = frases[Math.floor(Math.random() * frases.length)];
    msgBox.style.display = "flex";
};

btn2.onclick = () => {
    msgTitle.innerText = "Nunca se esqueça 💞";
    msgText.innerText = "Você é amada mais do que imagina. Eu te amo!";
    msgBox.style.display = "flex";
};

function closeMsg() {
    msgBox.style.display = "none";
}
