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

clockElement.addEventListener('click', () => {
    isDark =!isDark;
    clockElement.className = isDark? 'clock dark' : 'clock light';
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (!isFullscreen) {
      document.body.requestFullscreen();
      isFullscreen = true;
    } else {
      document.exitFullscreen();
      isFullscreen = false;
    }
  }
});

document.addEventListener('fullscreenchange', function(event) {
  if (document.fullscreenElement) {
    isFullscreen = true;
  } else {
    isFullscreen = false;
  }
});
