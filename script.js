const sounds = document.querySelectorAll("audio");

function playSound(id) {
  stopSound();
  document.getElementById(id).play();
}

function stopSound() {
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });
}
