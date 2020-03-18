// assign variables 
var homeBtn = document.getElementById("home-btn");
var clearScores = document.getElementById("clear-scores");

// get the list from storage
var list = JSON.parse(localStorage.getItem("list"))
if (list === null) {
  list = [];
}

var listElement = document.getElementById("list");

// display the list
for (var i = 0; i < list.length; i++) {
  var newLiElement = document.createElement("li");

  newLiElement.textContent = list[i].name + " ---- " + list[i].score;
  listElement.appendChild(newLiElement);
}

if (list.length === 0) {
  var messageElement = document.createElement("h2");
  messageElement.textContent = "No highscores yet!"
  document.body.appendChild(messageElement)
}

// when the user clicks on the 'go back' btn
homeBtn.addEventListener("click", function () {
  // the page redirects to index.html
  document.location.href = "../index.html";
});

// when the user clicks on the 'clear highscores' btn
clearScores.addEventListener("click", function(){
  // the data clears
  listElement.textContent = "";

});

