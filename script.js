// Navigation bar timer
var timerElement = document.querySelector(".timer");

var secondsLeft = 75;

// Create the countdown timer
var timerInterval = setInterval(function () {
  //update countdown
  timerElement.textContent = "Time: " + secondsLeft;
  secondsLeft--;

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
}
}, 1000);