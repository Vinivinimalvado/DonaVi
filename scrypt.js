// ===============================
// FRASES DE DIA DAS MÃES 💖
// ===============================
const frases = [
    "Mãe, seu amor é o que me dá força todos os dias 💗",
    "Tudo o que sou hoje devo a você, mãe 🌸",
    "Seu abraço é o lugar mais seguro do mundo 💞",
    "Obrigado por nunca desistir de mim, mãe 💐",
    "Seu amor é meu maior exemplo ❤️",
    "Mãe, você é meu maior presente da vida 🎁",
    "Nada no mundo se compara ao amor de uma mãe 💖",
    "Seu cuidado e carinho moldaram quem eu sou 🌷",
    "Mãe, sua força me inspira todos os dias 🌹",
    "Eu te amo hoje e sempre, mãe 💕"
];

// ===============================
// ELEMENTOS
// ===============================
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const msgBox = document.getElementById("msgBox");
const msgTitle = msgBox.querySelector("h3");
const msgText = msgBox.querySelector("p");
const card = document.querySelector(".card");

// ===============================
// CONTADOR DE DIAS (VISÍVEL NO CARD)
// ===============================
const nascimento = new Date(2008, 5, 7); // 07/06/2008
const hoje = new Date();
const diffTempo = hoje - nascimento;
const diasVividos = Math.floor(diffTempo / (1000 * 60 * 60 * 24));

// cria elemento do contador
const contador = document.createElement("p");
contador.style.marginTop = "10px";
contador.style.fontSize = "0.9rem";
contador.style.color = "#e75480";
contador.style.fontWeight = "600";
contador.innerText = `Desde 07/06/2008: ${diasVividos} dias de amor 💗`;

card.appendChild(contador);

// ===============================
// BOTÃO 1 — FRASES
// ===============================
btn1.addEventListener("click", () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    msgTitle.innerText = "Mensagem para você 💐";
    msgText.innerText = fraseAleatoria;
    msgBox.classList.add("active");
});

// ===============================
// BOTÃO 2 — CONTADOR DETALHADO
// ===============================
btn2.addEventListener("click", () => {
    msgTitle.innerText = "Uma vida ao seu lado 💖";
    msgText.innerText =
        `Desde o dia 07 de junho de 2008,
        já se passaram ${diasVividos} dias.

        E em todos eles, seu amor esteve comigo. 💗`;

    msgBox.classList.add("active");
});

// ===============================
// FECHAR MENSAGEM
// ===============================
function closeMsg() {
    msgBox.classList.remove("active");
}

// ===============================
// EFEITO DE CHUVA 🌸
// ===============================
const rain = document.getElementById("rain");

for (let i = 0; i < 40; i++) {
    const drop = document.createElement("span");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (2 + Math.random() * 3) + "s";
    drop.style.opacity = Math.random();
    rain.appendChild(drop);
}

// ===============================
// CARROSSEL COM 10 FOTOS 📸
// ===============================
const carousel = document.querySelector(".carousel");
carousel.innerHTML = "";

for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `mae${i}.jpg`;
    img.alt = `Momento especial ${i}`;
    if (i === 1) img.classList.add("active");
    carousel.appendChild(img);
}

const images = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 3000);
