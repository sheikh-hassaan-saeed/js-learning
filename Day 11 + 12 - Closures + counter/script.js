let timer;

function countDown(minutes) {
  let seconds = minutes * 60;

  timer = setInterval(function () {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("timerDisplay").textContent =
      (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

    if (seconds > 0) {
      seconds--;
    } else {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

document.getElementById("startBtn").onclick = function () {
  let mins = parseInt(document.getElementById("minutes").value);

  if (mins > 0) {
    countDown(mins);
  } else {
    alert("Enter valid number");
  }
};

function resetTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    document.getElementById("timerDisplay").textContent = "00:00";
  }
}

document.getElementById("timerDisplay").textContent = "00:00";
document.getElementById("resetBtn").onclick = resetTimer;
