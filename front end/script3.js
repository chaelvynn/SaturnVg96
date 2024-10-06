const audio = document.getElementById('background-music');
const muteUnmuteIcon = document.getElementById('mute-unmute-icon');
const volumeIcon = document.getElementById('volume-icon');


muteUnmuteIcon.addEventListener('click', function () {
    if (audio.muted) {
        audio.muted = false;
        volumeIcon.classList.remove('ri-volume-mute-fill');
        volumeIcon.classList.add('ri-volume-up-fill');
    } else {
        audio.muted = true;
        volumeIcon.classList.remove('ri-volume-up-fill');
        volumeIcon.classList.add('ri-volume-mute-fill');
    }
});

// Correct function name and ensure event listener works properly
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.innerHTML = 'X';
    } else {
        hamburger.innerHTML = '&#9776;';
    }
}

toggleMenu();

function closeSidebar() {
    document.getElementById('planet-sidebar').classList.remove('active');
}