let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let highBtn = document.querySelector("#high-scores");

let quizLordAsks = document.querySelector("#quizlord");
let timerCnt = document.querySelector("#timer");

let buttonA = document.querySelector("#buttonA");
let buttonB = document.querySelector("#buttonB");
let buttonC = document.querySelector("#buttonC");
let buttonD = document.querySelector("#buttonD");

let playerId = document.querySelector("#playername");
let hiScores = document.querySelector("#highscores");
let intervalGb;
let timeLeft;

let question;
let wrongBtn;

resetBtn.addEventListener("click", function(){
    clearInterval(intervalGb);
    timerCnt.textContent = 60;
})

startBtn.addEventListener("click", function(){
    clearInterval(intervalGb); 
    timeLeft = 60;    
    startTimer();
    quizLord();  
})
  

function startTimer(){
  
  intervalGb = setInterval(function(){
    timeLeft--;
    timerCnt.textContent = timeLeft;
      if(timeLeft === 0){
        clearInterval(intervalGb);
      }  
    }, 1000);
  }
  
  wrongBtn.addEventListener("click", function(){
    if (timeLeft >= 5) {
       timeLeft -= 5;
    } else if (timeLeft < 5) {
      timerCnt.textContent = "Quiz Lord Wins";
      clearInterval(intervalGb);
    }
)}

function quizLord() {
  quizLordAsks.textContent = questionArray[question].question;
  buttonA.textContent = questionArray[answers][0];
  buttonB.textContent = questionArray[answers][1];
  buttonC.textContent = questionArray[answers][2];
  buttonD.textContent = questionArray[answers][3];
}


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
    answers: ["Octopus French Fry", "One more time", "whip and nay nay", "with blue paint"],
    correctAnswer: 1
  },
  {
    question:"All your base are _____",
    answers: ["Octopus French Fry", "One more time", "whip and nay nay", "with blue paint"],
    correctAnswer: 2
  },
]

// if wrongBtn.textContent = questionArray[][correctAnswer]

document.addEventListener('click' )

const question = questionArray[currentQuestion];

if (rightAnswer) {
  
}
let correctAnswers = questions[correctAnswer][];

for (let i = 0; i < question.length; i++) {
  currentQuestion = question[i];
}

questionArray[i].answers
for (let = 0; i < array.lenth; i++) {

}  
let currentQuestion = 0;


document.querySelector("#question").textContent = questions[currentQuestion];

