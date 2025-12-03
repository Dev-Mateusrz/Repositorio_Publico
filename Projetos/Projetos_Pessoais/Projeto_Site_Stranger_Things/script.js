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

const audio = document.getElementById("upside-sound");
const toggleBtn = document.getElementById("sound-toggle");

audio.volume = 0.08;


// Playlist
const playlist = [
  "sons/musicas/running.mp3",
  "sons/musicas/shouldistay.mp3",
  "sons/musicas/everybreath.mp3",
  "sons/musicas/ambience.mp3"
];

let lastIndex = -1;

// Escolhe música aleatória sem repetir a mesma
function getRandomTrack() {
  let index;
  do {
    index = Math.floor(Math.random() * playlist.length);
  } while (index === lastIndex);

  lastIndex = index;
  return playlist[index];
}

// Toca uma música aleatória
function playRandom() {
  audio.src = getRandomTrack();
  audio.play().catch(() => { });
}

// Quando acabar → toca outra aleatória
audio.addEventListener("ended", playRandom);

// Botão 🔊 / 🔇
toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    playRandom();
    toggleBtn.textContent = "🔊";
  } else {
    audio.pause();
    toggleBtn.textContent = "🔇";
  }
});


document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".glow-effect").forEach(el => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const distance = Math.sqrt(x * x + y * y);

    // intensidade proporcional à proximidade
    let intensity = Math.max(0, 1 - distance / 300);

    el.style.textShadow = `
      0 0 ${20 * intensity}px rgba(255, 0, 0, ${intensity}),
      0 0 ${40 * intensity}px rgba(180, 0, 0, ${intensity * 0.6}),
      0 0 ${60 * intensity}px rgba(120, 0, 0, ${intensity * 0.4})
    `;
  })
});

