const clockElement = document.querySelector('#clock');
const timeElement = document.querySelector('#time');

let isDark = false;
let isFullscreen = false;

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    timeElement.textContent = time;
}

setInterval(updateTime, 1000);

clockElement.classList.add('light');
document.body.classList.add('light');

clockElement.addEventListener('click', () => {
    isDark = !isDark;
    clockElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark', isDark);
});

document.addEventListener('keydown', (event) => {
    if (event.key === ')') {
        if (!isFullscreen) {
            document.body.requestFullscreen();
            isFullscreen = true;
        }
    } else if (event.key === 'Escape') {
        if (isFullscreen) {
            document.exitFullscreen();
            isFullscreen = false;
        }
    }
});

document.addEventListener('fullscreenchange', () => {
    isFullscreen = document.fullscreenElement !== null;
});
