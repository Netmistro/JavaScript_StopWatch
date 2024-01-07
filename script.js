// Constants
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timerInterval;
let startTime = 0;
let elapsedTime = 0;

// Functions
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    timerEl.innerText = formatTime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  return (
    (hours ? (hours > 9 ? hours : `0${hours}`) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : `0${minutes}`) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : `0${seconds}`) : "00") +
    ":" +
    (milliseconds > 9 ? milliseconds : `0${milliseconds}`)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  timerEl.textContent = "00:00:00:00";
}

function onLoad() {
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// Onload Function
window.onload = onLoad;

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
