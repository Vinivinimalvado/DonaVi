document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // FRASES DIA DAS MÃES 💖
    // ===============================
    const frases = [
        "Mãe, seu amor é o que me dá força todos os dias 💗",
        "Tudo o que sou hoje devo a você, mãe 🌸",
        "Seu abraço é o lugar mais seguro do mundo 💞",
        "Obrigado por nunca desistir de mim, mãe 💐",
        "Seu amor é meu maior exemplo ❤️",
        "Mãe, você é meu maior presente da vida 🎁",
        "Nada no mundo se compara ao amor de uma mãe 💖",
        "Seu cuidado moldou quem eu sou 🌷",
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

    // ===============================
    // BOTÃO 1 – FRASES
    // ===============================
    btn1.addEventListener("click", () => {
        const frase = frases[Math.floor(Math.random() * frases.length)];
        msgTitle.innerText = "Para você, mãe 💖";
        msgText.innerText = frase;
        msgBox.classList.add("active");
    });

    // ===============================
    // BOTÃO 2 – CONTADOR DE DIAS
    // ===============================
    btn2.addEventListener("click", () => {
        const nascimento = new Date(2008, 5, 7);
        const hoje = new Date();
        const dias = Math.floor((hoje - nascimento) / (1000 * 60 * 60 * 24));

        msgTitle.innerText = "Nossa história 💗";
        msgText.innerText =
            `Desde 07 de junho de 2008,
            já se passaram ${dias} dias.

            Em todos eles, seu amor esteve comigo 💐`;

        msgBox.classList.add("active");
    });

    // ===============================
    // FECHAR
    // ===============================
    window.closeMsg = function () {
        msgBox.classList.remove("active");
    };

    // ===============================
    // CHUVA
    // ===============================
    const rain = document.getElementById("rain");
    for (let i = 0; i < 35; i++) {
        const drop = document.createElement("span");
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDuration = (2 + Math.random() * 3) + "s";
        drop.style.opacity = Math.random();
        rain.appendChild(drop);
    }

    // ===============================
    // CARROSSEL – 10 FOTOS
    // ===============================
    const carousel = document.querySelector(".carousel");
    carousel.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const img = document.createElement("img");
        img.src = `mae${i}.jpg`;
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

});
