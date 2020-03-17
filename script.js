// Assign variables to selected elements
var startBtnEl = document.getElementById("start-btn");
var quizDescriptionEl = document.querySelector(".quiz-description");
var quizEl = document.querySelector(".quiz");
var questionEl = document.querySelector(".question");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var choiceDEl = document.getElementById("D");
var resultsEl = document.querySelector(".results");
var saveNameEl = document.querySelector(".save-name");
var highscoreListEl = document.querySelector(".highscore-list");

// Create Questions
  // make an object that contains an array of all the questions and answers
var questionObj = [
  { 
    q: "Commonly used data types DO NOT INCLUDE:",
    a1: "1. Strings",
    a2: "2. Booleans",
    a3: "3. Alerts",
    a4: "4. Numbers",
    correct: "3. Alerts"
  }, 
  {
    q: "The condition in an if/else statement is enclosed within:",
    a1: "1. Quotes",
    a2: "2. Curly Brackets",
    a3: "3. Paranthesis",
    a4: "4. Square Brackets",
    correct: "2. Curly Brackets"
  }
];

// Display question to user
var questionObjIndex = 0; 
var questions = questionObj[questionObjIndex]; 

function displayQuestion() {
  questions = questionObj[questionObjIndex]; 
  questionEl.textContent = questions.q;
  choiceAEl.textContent = questions.a1;
  choiceBEl.textContent = questions.a2;
  choiceCEl.textContent = questions.a3;
  choiceDEl.textContent = questions.a4;
};

// Check the answer 
  // create variable to keep track of score
    var score = 0;
  // when the user chooses an answer (clicks on the answer button)
  // call upon the checkAnswer function
    choiceAEl.addEventListener("click", checkAnswer);
    choiceBEl.addEventListener("click", checkAnswer);
    choiceCEl.addEventListener("click", checkAnswer);
    choiceDEl.addEventListener("click", checkAnswer);

function checkAnswer(event) {
  // if the correct answer is the same as user input 

  questions = questionObj[questionObjIndex]; 
    if (event.target.textContent === questions.correct){
      // then increase the score by 1
      score++;
      // display text "correct" on the page
      resultsEl.textContent = "Correct!"
        // !!!!!! BUG: correct answer text not being shown 
    }
  // else
    else {
      // display text "wrong"
      resultsEl.textContent = "Wrong!"
    }

  // switch to next question
    // if the current question is not the last question 
    if (questionObjIndex < questionObj.length-1) {
      // then continue to next question 
      questionObjIndex++;
      // display next question
      displayQuestion();
      // // !!!!!! TODO: clear results
      //   resultsEl.textContent = "";
    };
    // else 
      // !!!!!!! TODO: call upon the function that will show the save name list 

};

// Start the quiz
//when we click on the button, the quiz will start
startBtnEl.addEventListener("click", startQuiz);
startBtnEl.addEventListener("click", startTimer);

  function startQuiz() {
    // hide the previous content 
    startBtnEl.style.display = "none";
    quizDescriptionEl.style.display = "none";
    // display the questions and answers
    displayQuestion();
    // change the display for the quiz to become visible
    quizEl.style.display = "block";
  };
  

// Navigation bar timer
var timerElement = document.querySelector(".timer");

var secondsLeft = 75;
var timerInterval;

// Create the countdown timer
function startTimer() { 
  timerInterval = setInterval(function () {
    //update countdown
    timerElement.textContent = "Time: " + secondsLeft;
    secondsLeft--;
  
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
  }
  }, 1000);
};
