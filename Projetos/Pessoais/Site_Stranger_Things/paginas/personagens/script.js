// ------ PARTICULAS CINZA / FUMAÇA ------
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 90; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  // tons de cinza e preto (aleatórios)
  const gray = Math.floor(Math.random() * 120); // 0 a 120 (preto → cinza claro)
  p.style.background = `rgb(${gray}, ${gray}, ${gray})`;

  // posição inicial aleatória
  p.style.left = Math.random() * 100 + "vw";

  // velocidades diferentes
  p.style.animationDuration = 5 + Math.random() * 7 + "s";
  p.style.animationDelay = Math.random() * 5 + "s";

  particleContainer.appendChild(p);
}

// ===============================
// SOM TEMA MUNDO INVERTIDO
// ===============================

const soundBtn = document.getElementById("sound-toggle");
const sound = document.getElementById("upside-sound");
let soundOn = false;

sound.volume = 0.2; // volume suave

soundBtn.addEventListener("click", () => {
  if (!soundOn) {
    sound.play();
    soundBtn.textContent = "🔊";
    soundOn = true;
  } else {
    sound.pause();
    soundBtn.textContent = "🔇";
    soundOn = false;
  }
});
