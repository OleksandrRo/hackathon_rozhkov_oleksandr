const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const highBtn = document.querySelector("#high-scores");
const questionText = document.getElementById("questiontext");
const timerCnt = document.querySelector("#timer");

const hiScores = document.querySelector("#highscores");

let intervalGb;
let timeLeft;

let question;
let wrongBtn;
let scoreKeeper = document.getElementById("player-score");
let poiNts = 0;

const buttonA = document.getElementById("0");
const buttonB = document.getElementById("1");
const buttonC = document.getElementById("2");
const buttonD = document.getElementById("3");

const questionArray = [
  {
    question: "What is the correct command to create a new React project?",
    answers: [" npm create-react-app myReactApp", " npm create-react-app", " npx create-react-app", " npx create-react-app myReactApp"],
    correctAnswer: 3
  },
  {
    question: "What command is used to start the React local development server?",
    answers: ["npm run dev", "npm start", "npm build", "npx install"],
    correctAnswer: 1
  },
  {
    question: "What is the default local host port that a React development server uses?",
    answers: ["8080", "3000", "3001", "5050"],
    correctAnswer: 1
  },
  {
    question: "What tool does React use to compile JSX?",
    answers: [ "Babel", "JSX Comliler", "ReactDOM", "React Router"],
    correctAnswer: 0
  },
  {
    question: "What is the children prop?",
    answers: [" A property that lets you nest components in other components", " A property that lets you pass data to child components", " A property that lets you set an object as a property", " A property that adds child values to state"],
    correctAnswer: 1
  },
  {
    question: "React component names must begin with an uppercase letter.",
    answers: ["True", "False", "What uppercase?"],
    correctAnswer: 0
  },
  {
    question: "Which operator can be used to conditionally render a React component?",
    answers: [ "$", "??", "&&", "||"],
    correctAnswer: 2
  },
  {
    question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    answers: [ "id", "index", "data", "key"],
    correctAnswer: 3
  },
  {
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    answers: [ "DOM", "Shadow DOM", "Virtual DOM  ", "React DOM"],
    correctAnswer: 2
  },
  {
    question: "What is a common use case for ref?",
    answers: [ "To refer to another JavaScript file", "To refer to a function", "To bind the function", "To directly access a DOM node"],
    correctAnswer: 3
  },
  {
    question: "Which of the following is NOT a rule for React Hooks?",
    answers: [ "Hooks can only be called inside React Function components", "Hooks can be called in Class or Function components", "Hooks can only be called at the top level of a component", "Hooks cannot be conditional"],
    correctAnswer: 1
  },
  {
    question: "Why should you avoid copying the values of props into a component's state?",
    answers: [ "Because that would create two instances of the same state that could become out of sync  ", "Because prop values cannot be stored in state", "Because you should never mutate state", "Because you want to allow data to flow back up to the parent"],
    correctAnswer: 0
  },
  
];

const startTimer = () => {

  intervalGb = setInterval(() => {
    timeLeft--;
    timerCnt.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalGb);
    }
  }, 1000);
}

resetBtn.addEventListener("click", () => {
  localStorage.clear()
  location.reload()

      
  
    });

currentQuestionIndex = 0

startBtn.addEventListener("click", () => {
  
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
  hiScores.setAttribute("style", "display: none");
});

const dispHigh = () => {
  clearInterval(intervalGb);
  questionText.textContent = ("");
  buttonA.setAttribute("style", "visibility: hidden");
  buttonB.setAttribute("style", "visibility: hidden");
  buttonC.setAttribute("style", "visibility: hidden");
  buttonD.setAttribute("style", "visibility: hidden");
  timerCnt.textContent = "";
  saveHighScore();
}

quizLord = document.getElementById("quizLORD");

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

const rightAnswer = () => {
  if (currentQuestionIndex === 11) {
    dispHigh();
  } else if (timeLeft >= 0) {
    poiNts += 1000;
    currentQuestionIndex++;
    quizLord.src = "./assets/images/burt.gif";
    displayQuestion();
  }
}

const wrongAnswer = () => {
  if (currentQuestionIndex === 11 || timeLeft <= 0) {
    dispHigh();
  } else if (timeLeft -= 5) {
    currentQuestionIndex++;
    quizLord.src = "./assets/images/ha-ha.gif";
    displayQuestion();
  }
}

function saveHighScore() {
  hiScores.setAttribute("style", "display: flex");
}


const displayQuestion = () => {
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
let notesStorage = JSON.parse(localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : [];


hiScores.addEventListener("submit", (e) => {
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
    console.log(note)

  });
 
};

listBuilder();

