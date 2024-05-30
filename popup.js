// Pobranie elementów popupu i przycisków
const popup = document.getElementById('popup');
const playPauseBtn = document.getElementById('playPauseBtn');
const closeBtn = document.getElementById('closeBtn');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Funkcja pokazująca popup
function showPopup() {
    popup.classList.add('show');
}

// Funkcja ukrywająca popup
function hidePopup() {
    popup.classList.remove('show');
    audioPlayer.pause(); // Pauza audio podczas zamykania popupu
}

// Funkcja odtwarzająca lub pauzująca audio
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pauza';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Odtwórz';
    }
}

// Funkcja ładowania i odtwarzania audio
function playAudio(url) {
    audioSource.src = url;
    audioPlayer.load();
    audioPlayer.play();
    playPauseBtn.textContent = 'Pauza';
}

// Nasłuchiwacze zdarzeń dla przycisków
playPauseBtn.addEventListener('click', togglePlayPause);
closeBtn.addEventListener('click', hidePopup);

// Dodanie nasłuchiwaczy zdarzeń do węzłów dla pokazania popupu i odtwarzania audio
const nodes = document.querySelectorAll('.node');
nodes.forEach(node => {
    node.addEventListener('click', function(event) {
        const soundUrl = this.dataset.url;
        playAudio(soundUrl);
        showPopup();
    });
});
