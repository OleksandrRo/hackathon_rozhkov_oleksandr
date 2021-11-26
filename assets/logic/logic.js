let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let highBtn = document.querySelector("#high-scores");
let questionText = document.getElementById("questiontext");
let timerCnt = document.querySelector("#timer");

// let playerId = document.querySelector("#playername");
let hiScores = document.querySelector("#highscores");

let intervalGb;
let timeLeft;

let question;
let wrongBtn;
let scoreKeeper = document.getElementById("player-score");
let poiNts = 0;

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
  {
    question:"I just wanted to pet ______",
    answers: ["the shelf", "the tacos", "the wabbits", "the other thing before I ate these tacos"],
    correctAnswer: 2
  },
  {
    question:"J-Qwery is _____",
    answers: ["the dude slanging leftover chipotle behind starbucks", "a slang term for a life question", "a web API", "a word made up by the person who made this game"],
    correctAnswer: 3
  },
  {
    question:"In late may of 1926, Ralph Craumine invented the first _____",
    answers: ["Toaster", "USB log", "nothing, thats complete bs", "color wheel"],
    correctAnswer: 2
  },
  {
    question:"Hit it from the _____",
    answers: ["orange beam next to the 2nd coupler", "back", "this quiz is horrible", "nacho cheese"],
    correctAnswer: 1
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
    timerCnt.textContent = "";
    buttonA.setAttribute("style", "visibility: hidden");
    buttonB.setAttribute("style", "visibility: hidden");
    buttonC.setAttribute("style", "visibility: hidden");
    buttonD.setAttribute("style", "visibility: hidden");

});

let currentQuestionIndex = 0

startBtn.addEventListener("click", function(){
    clearInterval(intervalGb); 
    timeLeft = 60;
    poiNts = 0;
    startTimer();
    currentQuestionIndex = 0;
    buttonA.setAttribute("style", "visibility: visible");
    buttonB.setAttribute("style", "visibility: visible");
    buttonC.setAttribute("style", "visibility: visible");
    buttonD.setAttribute("style", "visibility: visible");
    displayQuestion();
});

function dispHigh(params) {
  clearInterval(intervalGb);
  questionText.textContent = ("");
  buttonA.setAttribute("style", "visibility: hidden");
  buttonB.setAttribute("style", "visibility: hidden");
  buttonC.setAttribute("style", "visibility: hidden");
  buttonD.setAttribute("style", "visibility: hidden");
  timerCnt.textContent = "";
  saveHighScore();
}

quizLord = document.getElementById("iamquizLORD");

buttonA.addEventListener("click", answerSubmit);
buttonB.addEventListener("click", answerSubmit);
buttonC.addEventListener("click", answerSubmit);
buttonD.addEventListener("click", answerSubmit);

function answerSubmit(userChoice) {
  let clicked = userChoice.currentTarget;
  if (clicked.id == questionArray[currentQuestionIndex].correctAnswer) {
    rightAnswer();
    } else {
      wrongAnswer();
    }
}

function rightAnswer() {
  if (currentQuestionIndex === 7) {    
    dispHigh();    
  } else if (timeLeft >= 0) {
      poiNts += 1000;
      currentQuestionIndex ++;
      quizLord.src = "./assets/images/QuizLord.png"; 
      displayQuestion();
    }  
}

function wrongAnswer() {
  if (currentQuestionIndex === 7 || timeLeft <= 0) {
    dispHigh ();
  } else if (timeLeft -= 5) {
    currentQuestionIndex ++;
    quizLord.src = "./assets/images/quizLordWrong.png";
    displayQuestion ();
   }
} 

function saveHighScore() {
  hiScores.setAttribute("style", "display: flex");
}


// function displayPoop() {
//   if (timeLeft >= 5) {
//     timeLeft -= 5; 
//  } else if (timeLeft < 5) {
//    timerCnt.textContent = "Quiz Lord Wins";
//    clearInterval(intervalGb);
//  }
// }

function displayQuestion(params) {
    questionText.textContent = questionArray[currentQuestionIndex].question;
    buttonA.innerText = questionArray[currentQuestionIndex].answers[0];
    buttonB.innerText = questionArray[currentQuestionIndex].answers[1];
    buttonC.innerText = questionArray[currentQuestionIndex].answers[2];
    buttonD.innerText = questionArray[currentQuestionIndex].answers[3];
    scoreKeeper.textContent = `${poiNts}`;     
}


const noteInput = document.getElementById("note-input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");
let notesStorage = JSON.parse(localStorage.getItem("notes"))? JSON.parse(localStorage.getItem("notes")): [];


hiScores.addEventListener("submit", function(e) {
  e.preventDefault();
  let currentScore = {
    initials: noteInput.value,
    score: scoreKeeper.innerText
  }
  notesStorage.push(currentScore);
  console.log(notesStorage);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  noteInput.value = "";
  hiScores.setAttribute("style", "display: none");
  listBuilder();
});



const listBuilder = () => {
  notes.innerHTML = "";
  notesStorage.forEach(initialsScore => {
    const note = document.createElement("li");
  note.innerHTML = initialsScore.initials + " <------> " + initialsScore.score;
  notes.appendChild(note);
  });
};

listBuilder();

// const getNotes = JSON.parse(localStorage.getItem("notes"));getNotes.forEach((note) => {
//   listBuilder(note);
// });


// const deleteNote = (btn) => {
//   let el = btn.parentNode;
//   const index = [...el.parentElement.children].indexOf(el);
//   notesStorage.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesStorage));
//   el.remove();
// };

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

