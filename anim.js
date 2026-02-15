// Sincronizar las letras con la canción "Sabes una cosa" - Luis Miguel
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");



// Lyrics Synchronization Helper (Log time on Spacebar press)
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    console.log(`{ text: "INSERT_TEXT_HERE", time: ${audio.currentTime} },`);
  }
});

// Array de objetos con la letra y el tiempo aproximado en segundos
var lyricsData = [
  { text: "Sabes una cosa...", time: 15.5 },
  { text: "Tengo algo que decirte <br> Y no sé <br> cómo empezar a explicar", time: 20.5 },
  { text: "Lo que te quiero contar", time: 26 },
  { text: "Sabes una cosa...", time: 30.6 },
  { text: "No encuentro <br> las palabras <br> ni verso <br> rima o prosa", time: 35.5 },
  { text: "Quizá con una rosa <br> te lo pueda decir", time: 40 },
  { text: "Sabes una cosa...", time: 45.5 },
  { text: "No sé ni desde cuando <br> Llegaste de repente", time: 51 },
  { text: "Mi corazón", time: 52 },
  { text: "Se puso a cantar", time: 56 },
  { text: "Sabes una cosa...", time: 59.5 },
  { text: "Te quiero, niña hermosa <br> y te entrego en esta rosa", time: 65.5 },
  { text: "La vida <br> que me pueda quedar", time: 70 },
  { text: "Doy gracias al cielo <br> Por haberte conocido", time: 74 },
  { text: "Doy gracias al cielo <br> <br> Y le cuento a las estrellas", time: 80.5 },
  { text: "Lo bonito que sentí", time: 85 },
  { text: "Cuando te conocí <br> <br> Sabes...", time: 89 },
  { text: "Sabes una cosa", time: 94.5 },
  { text: "Que yo te quiero", time: 98.5 },
  { text: "Que, sin ti, me muero", time: 100.5 },
  { text: "Si estás lejos...", time: 105.2 },
  { text: "Sabes una cosa", time: 124 },
  { text: "Tengo algo de decirte <br> Y no sé <br> cómo empezar a explicar", time: 129 },
  { text: "Lo que te quiero contar", time: 134.5 },
  { text: "Sabes una cosa", time: 139.5 },
  { text: "Te quiero y te venero", time: 143 },
  { text: "Te adoro y te deseo", time: 145 },
  { text: "Cariño, ven y déjate amar", time: 147 },
  { text: "Doy gracias al cielo", time: 153 },
  { text: "Por haberte conocido", time: 151.5 },

];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // Obtiene el tiempo exacto con decimales
  console.log("Tiempo actual: " + time); // Esto imprimirá el tiempo en la consola (F12)
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4 // 4 segundos por línea
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza con más frecuencia para que el texto cambie rápido
setInterval(updateLyrics, 500);

// Función para ocultar el título (ajustada a la duración de la canción)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Se oculta a los 190 segundos (casi al final)
var titleTimer = setTimeout(ocultarTitulo, 190000);

// Auto-restart music and lyrics when finished
audio.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();

  // Reset Title
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.display = "block";
    titulo.style.animation = "none";

    // Reset fade out timer
    clearTimeout(titleTimer);
    titleTimer = setTimeout(ocultarTitulo, 190000);
  }
});