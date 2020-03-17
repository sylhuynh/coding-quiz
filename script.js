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

    if (secondsLeft <= 0) {
      timerElement.textContent = "Time: " + 0;
    }
  }, 1000);
};


// Create Questions
// make an object that contains an array of all the questions and answers
var questionObj = [
  {
    q: "Commonly used data types DO NOT INCLUDE:",
    a1: "1. alerts",
    a2: "2. booleans",
    a3: "3. strings",
    a4: "4. numbers",
    correct: "1. alerts"
  },
  {
    q: "The condition in an if/else statement is enclosed within:",
    a1: "1. quotes",
    a2: "2. curly brackets",
    a3: "3. parenthesis",
    a4: "4. square brackets",
    correct: "3. parenthesis"
  },
  {
    q: "Arrays in JavaScript can be used to:",
    a1: "1. numbers and strings",
    a2: "2. other arrays",
    a3: "3. booleans",
    a4: "4. all of the above",
    correct: "4. all of the above"
  },
  {
    q: "A very useful tool used during developmenet and debugging for printing content to the debugger is:",
    a1: "1. JavaScript",
    a2: "2. terminal/bash",
    a3: "3. for loops",
    a4: "4. console.log",
    correct: "4. console.log"
  },
  {
    q: "In JavaScript, what does 'prompt' refer to?",
    a1: "1. displays a pop up message to the user",
    a2: "2. displays a pop up with text-box input",
    a3: "3. displays a true/false pop up",
    a4: "4. all of the above",
    correct: "2. displays a pop up with text-box input"
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
  if (event.target.textContent === questions.correct) {
    // then increase the score by 1
    score++;
    
    // display text "correct" on the page
    resultsEl.textContent = "Correct!"
  }
  
  // else
  else {
    // display text "wrong"
    resultsEl.textContent = "Wrong!"


    secondsLeft -= 5;
    if (secondsLeft <= 0) {
      timerElement.textContent = "Time: " + 0;
    }
    else {
      timerElement.textContent = "Time: " + secondsLeft;
    }
    startTimer();
  }
  
  // // // !!!!!! TODO: clear results
  // resultsEl.textContent = "";
  
  // switch to next question
  // if the current question is not the last question 
  if (questionObjIndex < questionObj.length - 1) {
    // then continue to next question 
    questionObjIndex++;

    // display next question
    displayQuestion();
  };

  // else 
  // !!!!!!! TODO: call upon the function that will show the save name list 
};
