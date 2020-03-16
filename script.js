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
    correct: "C"
  }, 
  {
    q: "This is question 2?",
    a1: "A",
    a2: "B",
    a3: "C",
    a4: "D",
    correct: "A"
  }
];

// Display question to user
var lastQuestionObjIndex = questionObj.length-1; 
var currentQuestionObjIndex = 0; 

function displayQuestion() {
  var questions = questionObj[currentQuestionObjIndex]; 
  questionEl.textContent = questions.q;
  choiceAEl.textContent = questions.a1;
  choiceBEl.textContent = questions.a2;
  choiceCEl.textContent = questions.a3;
  choiceDEl.textContent = questions.a4;
};
// NEED TO CALL UPON THIS FUNC TO DISPLAY THE QUESTIONS AND ANSWER

// Check the answer 
  // create variable to keep track of score
    var score = 0;
  // when the user chooses an answer (clicks on the answer button)
  // call upon the checkAnswer function
    choiceAEl.addEventListener("click", checkAnswer);
    choiceBEl.addEventListener("click", checkAnswer);
    choiceCEl.addEventListener("click", checkAnswer);
    choiceDEl.addEventListener("click", checkAnswer);

    // when adding checkAnswer("A"); --> first question disappears
function checkAnswer(answer) {
  // if the correct answer is the same as user input 
  var questions = questionObj[currentQuestionObjIndex]; 
    if (questions.correct === answer ){
      // then increase the score by 1
      score++;
      // display text "correct" on the page
      resultsEl.textContent = "Correct!"
        // !!!!!! BUG: correct answers are not being shown 
    }
  // else
    else {
      // display text "wrong"
      resultsEl.textContent = "Wrong!"
    }

  // switch to next question
    // if the current question is not the last question 
    if (currentQuestionObjIndex < lastQuestionObjIndex) {
      // then continue to next question 
      currentQuestionObjIndex++;
      // !!!!!! TODO: clear results
        // resultsEl.textContent = "";
      // display next question
      displayQuestion();
    };
    // else 
      // !!!!!!! TODO: call upon the function that will show the save name list 

};

// Start the quiz
//when we click on the button, the quiz will start
startBtnEl.addEventListener("click", startQuiz);

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

// Create the countdown timer
var timerInterval = setInterval(function () {
  //update countdown
  timerElement.textContent = "Time: " + secondsLeft;
  secondsLeft--;

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
}
}, 1000);