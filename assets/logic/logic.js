let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let highBtn = document.querySelector("#high-scores");

let timerCnt = document.querySelector("#timer");

let playerId = document.querySelector("#playername");
let hiScores = document.querySelector("#highscores");

let intervalGb;
let timeLeft;

let question;
let wrongBtn;
let points = 0;

let buttonA = document.getElementById("0");
let buttonB = document.getElementById("1");
let buttonC = document.getElementById("2");
let buttonD = document.getElementById("3");

let questionArray = [
  {
    question:"Electric Boogaloo is what?",
    answers: ["A common filler word used by tech school instructors", "Grilled salmon with pepper and lemon", "A tiktok sensation", "The greatest sequel of all time"],
    correctAnswer: 3
  },
  {
    question:"_____ haze, all in my brain",
    answers: ["Hazey", "Purple", "Fluffy", "Purpy"],
    correctAnswer: 1
  },
  {
    question:"Can you go over that _____",
    answers: ["Octopus French Fry", "one more time", "whip and nay nay", "with blue paint"],
    correctAnswer: 1
  },
  {
    question:"All your base are _____",
    answers: ["belong to us", "such a vibe", "better than cookies", "better than no base"],
    correctAnswer: 0
  },
];

function startTimer(){
  
  intervalGb = setInterval(function(){
    timeLeft--;
    timerCnt.textContent = timeLeft;
      if(timeLeft === 0){
        clearInterval(intervalGb);
      }  
    }, 1000);
  }

resetBtn.addEventListener("click", function(){
    clearInterval(intervalGb);
    timerCnt.textContent = 60;

});

let currentQuestionIndex = 0

startBtn.addEventListener("click", function(){
    clearInterval(intervalGb); 
    timeLeft = 60;    
    startTimer();
    displayQuestion();
       
});

function dispHigh(params) {
  alert('facehead');
}

buttonA.addEventListener("click", answerSubmit);
buttonB.addEventListener("click", answerSubmit);
buttonC.addEventListener("click", answerSubmit);
buttonD.addEventListener("click", answerSubmit);

function correctWin() {
  if (currentQuestionIndex === 3) {
    dispHigh();
    
  } else if (timeLeft >= 0) {
      points += 10;
      currentQuestionIndex ++;
      displayQuestion();
    }  
}

function answerSubmit(eV) {
  let clicked = eV.currentTarget;
  if (clicked.id == questionArray[currentQuestionIndex].correctAnswer) {
    correctWin();
    } else {
      wrongAnswer();
    }
}



function wrongAnswer() {
  if (currentQuestionIndex === 3 || timeLeft <= 0) {
    displayPoop ();
  } else (timeLeft -= 5) {
    currentQuestionIndex ++;
    displayQuestion ();
   }
} 

function displayPoop() {
  if (timeLeft >= 5) {
    timeLeft -= 5; 
 } else if (timeLeft < 5) {
   timerCnt.textContent = "Quiz Lord Wins";
   clearInterval(intervalGb);
 }
}

function displayQuestion(params) {
  let questionText = document.getElementById("questiontext");
    questionText.textContent = questionArray[currentQuestionIndex].question;
    buttonA.innerText = questionArray[currentQuestionIndex].answers[0];
    buttonB.innerText = questionArray[currentQuestionIndex].answers[1];
    buttonC.innerText = questionArray[currentQuestionIndex].answers[2];
    buttonD.innerText = questionArray[currentQuestionIndex].answers[3];    
}
// function quizLord(clkEV) {
  
// }




// for (let i = 0; i <question.length; i++) {
//     console.log(question.length);
//     currentQuestion = question[i];
//     console.log(currentQuestion);
// }


// if wrongBtn.textContent = questionArray[][correctAnswer]

// document.addEventListener('click' )

// const question = questionArray[currentQuestion];

// if (rightAnswer) {
  
// }
// let correctAnswers = questions[correctAnswer][];

// for (let i = 0; i < question.length; i++) {
//   currentQuestion = question[i];
// }

// questionArray[i].answers
// for (let = 0; i < array.lenth; i++) {

// }  
// let currentQuestion = 0;


// document.querySelector("#question").textContent = questions[currentQuestion];

