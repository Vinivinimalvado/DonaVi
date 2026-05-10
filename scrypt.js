* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* Efeito de chuva (fica suave e romântico) */
.rain span {
    position: absolute;
    top: -20px;
    width: 2px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}

/* CARD PRINCIPAL */
.card {
    background: rgba(255, 255, 255, 0.95);
    width: 340px;
    padding: 20px;
    border-radius: 22px;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
    animation: fadeIn 1.2s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* CARROSSEL */
.carousel {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 18px;
    margin-bottom: 15px;
}

.carousel img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease;
}

.carousel img.active {
    opacity: 1;
}

/* TEXTOS */
.card h2 {
    color: #e75480;
    margin-bottom: 6px;
    font-size: 1.6rem;
}

.card p {
    color: #555;
    font-size: 0.95rem;
    margin-bottom: 18px;
}

/* BOTÕES */
.buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.buttons button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    color: white;
    font-size: 0.85rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.buttons button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 120, 160, 0.5);
}

/* CAIXA DE MENSAGEM */
.message-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    background: white;
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    opacity: 0;
    pointer-events: none;
    transition: 0.4s ease;
    z-index: 10;
}

.message-box.active {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}

.message-box h3 {
    color: #e75480;
    margin-bottom: 10px;
}

.message-box p {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 15px;
    line-height: 1.4;
}

.message-box button {
    padding: 8px 18px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    color: white;
    cursor: pointer;
}