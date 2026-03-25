// Affichage de la date actuelle
const currentDateElement = document.getElementById("currentDate");
const now = new Date();
currentDateElement.textContent = "Nous sommes le " + now.toLocaleDateString();

// Gestion du mode sombre
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change le texte du bouton
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Désactiver le mode sombre";
    } else {
        darkModeToggle.textContent = "Activer le mode sombre";
    }
});

// Chronomètre
let seconds = 0;
let interval = null;

const timeDisplay = document.getElementById("time");
const resetButton = document.getElementById("resetChronometer");

// Fonction pour formater le temps
function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Démarrer le chronomètre automatiquement
interval = setInterval(() => {
    seconds++;
    timeDisplay.textContent = formatTime(seconds);
}, 1000);

// Bouton de remise à zéro
resetButton.addEventListener("click", () => {
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
});
