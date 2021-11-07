const logoElement = document.getElementById("logo");
const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementsByClassName("reset-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const maincontent = document.getElementById("maincontent")
const loserGame = document.getElementById("loserGame")
const winnerGame = document.getElementById("winnerGame")
const wrongAnswerElement = document.getElementById("wrongAnswer")
const wrongAnswerCounterElement = document.getElementById("wrongAnswerCounter")
const progressBarBorder = document.getElementById("progress-bar-border")
const progressBarElement = document.getElementById("progress-bar")
const gameTitle = document.getElementById("game-title")
const timerElement = document.getElementById("timer")
const instructionElement = document.getElementById("instruction-container")
const instructionButtonElement = document.getElementById("instruction-btn")
const instructions = document.getElementById("instructions")
const gameTitleElement = document.getElementById("game-title")
const points = document.getElementById("points")
const audioButton = document.getElementById("audio-btn")


/*variáveis de escopo global*/
let shuffledQuestions, currentQuestionIndex, currentQuestion, questionLevelIndex, isCorrect;
let seconds;
let livesCounter = 3;
let chosenAnswer;
let musicClick = 0;
let correctAnswerCounter = 0;
let timerClock;


/*audio inicial*/
audioButton.addEventListener('click', playBoasVindas)
boasVindas = new Audio("./assets/audio/boas-vindas.mp3");
function playBoasVindas() {
  if (musicClick === 0) {
    boasVindas.play();
    musicClick++;
    console.log(musicClick)
  }
  boasVindas.volume = 0.9;
}

/*página inicial*/

playButton.addEventListener("click", startGame);
instructionButtonElement.addEventListener("click", gameInstructions);
progressBarBorder.classList.add("hide");

//quando começar o jogo, esconder o botão play e mostrar as perguntas
function startGame() {
  questionLevelIndex = 1;
  playButton.classList.add("hide");
  instructions.classList.add("hide");
  logoElement.classList.add("hide");
  shuffledQuestions = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[shuffledQuestions];
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  updateTimerElement();
  timerCountdown();
  progressBarBorder.classList.remove("hide");
  gameTitle.classList.add("hide");
  nextButton.classList.add("hide");
  instructionButtonElement.classList.add("hide");
  audioButton.classList.add("hide");
  points.classList.remove("hide");
  if(livesCounter === 3) {
    wrongAnswerElement.innerHTML = `<i class="fas fa-heart"> <i class="fas fa-heart"> <i class="fas fa-heart">`
  }
}

//quando clicar em instrucoes, mostrar um texto
function gameInstructions() {
  gameTitleElement.innerHTML = `Instruções`;
  instructionButtonElement.classList.add("hide");
  instructionElement.classList.remove("hide");
  logoElement.classList.add("hide");
  instructions.classList.remove("hide")
  audioButton.classList.add("hide");
}


//toda vez que eu clicar em confirma, ele vai para a próxima pergunta
nextButton.addEventListener("click", () => {
  //para nao repetir, colocar as perguntas que ja foram em uma array nova
  questions.splice(questions.indexOf(currentQuestion), 1)

  //como sortear aleatoriamente e jogar as que ja foram sorteadas para o fim da array
  if(questionLevelIndex < 5) {
    const filterLevelIndexEasy = questions.filter((element) => element.level === 'fácil')
    currentQuestionIndex = Math.floor(Math.random() * (Math.floor(filterLevelIndexEasy.length - (filterLevelIndexEasy.length/2))))
    currentQuestion = filterLevelIndexEasy[currentQuestionIndex];
    const questionEl = filterLevelIndexEasy.slice(currentQuestionIndex, 1);
    filterLevelIndexEasy.push(questionEl);

  } else if (questionLevelIndex > 4 && questionLevelIndex < 9) {
    const filterLevelIndexMedium = questions.filter((element) => element.level === 'médio')
    currentQuestionIndex = Math.floor(Math.random() * (Math.floor(filterLevelIndexMedium.length - (filterLevelIndexMedium.length/2))))
    currentQuestion = filterLevelIndexMedium[currentQuestionIndex];
    const questionEl = filterLevelIndexMedium.slice(currentQuestionIndex, 1);
    filterLevelIndexMedium.push(questionEl);

  } else {
    const filterLevelIndexHard = questions.filter((element) => element.level === 'difícil')
    currentQuestionIndex = Math.floor(Math.random() * (Math.floor(filterLevelIndexHard.length - (filterLevelIndexHard.length/2))))
    currentQuestion = filterLevelIndexHard[currentQuestionIndex];
    const questionEl = filterLevelIndexHard.slice(currentQuestionIndex, 1);
    filterLevelIndexHard.push(questionEl);
  }
  setNextQuestion();
  timerCountdown();
  nextButton.classList.add("hide");
});

// a cada nova pergunta, ele vai buscar o array de respostas
function setNextQuestion() {
  seconds = 60;
  questionElement.innerHTML = currentQuestion.question;
  for (let i = 0; i < answerButtonsElement.children.length; i++) {
	  if(answerButtonsElement.children[i].classList.contains("correct")) {
		  answerButtonsElement.children[i].classList.remove("correct")
	  }
    answerButtonsElement.children[i].innerHTML = currentQuestion.answers[i];
  }
  updateTimerElement();
  nextButton.classList.remove("hide");
  wrongAnswerElement.classList.remove("hide")

  for (let i = 0; i < answerButtonsElement.children.length; i++) {
    answerButtonsElement.children[i].disabled = false;
    answerButtonsElement.children[i].classList.remove("correct")
    answerButtonsElement.children[i].classList.remove("wrong")
  }
  questionLevelIndex++;
  progressBarElement.style.width = `${(questionLevelIndex/12) * 99}px`
}



//funcionalidades de resposta certa e errada
answerButtonsElement.addEventListener("click", (event) => {
  nextButton.classList.remove("hide");
  chosenAnswer = event.target;
  if(chosenAnswer.classList.contains('btn')) {
    
    if(seconds === 0 || seconds === null) {
      return;
    } else {

      if (chosenAnswer.innerText === currentQuestion.correctAnswer) {
        chosenAnswer.classList.add("correct");
        correctAnswerCounter++;
        winCheck(correctAnswerCounter)
        for (let i = 0; i < answerButtonsElement.children.length; i++) {
          if (answerButtonsElement.children[i] !== chosenAnswer) {
            answerButtonsElement.children[i].disabled = true;
          }
        }
       } else {
        for (let i = 0; i < answerButtonsElement.children.length; i++) {
          if (answerButtonsElement.children[i] !== chosenAnswer) {
            answerButtonsElement.children[i].disabled = true;
          }
        }
        chosenAnswer.classList.add("wrong");
        whenTimeIsOver();
      }
    }
  } 
});

//contagem vitoria
function winCheck(counter) {
  if(counter >= 12) {
    winGame();
  }
}

//timer com 60 segundos para responder
function updateTimerElement() {
  timerElement.innerHTML = `<i class="fas fa-clock">`
  timerElement.innerHTML += ` ${seconds}` 
  //timerClock = timerElement.innerText;
}

function timerCountdown() {
  timerElement.classList.remove('hide')
  
  let myTimer = setInterval(() => {  
    const timeOver = seconds > 0 
    if(timeOver) {
      seconds--;
    } else if (seconds === 0){
      clearInterval(myTimer);
      whenTimeIsOver();
    } 
    updateTimerElement()
  }, 1000)
}

//3 respostas erradas antes de perder o jogo
function whenTimeIsOver() {
  // if(!chosenAnswer) {

    if(seconds !== 0 || seconds !== null) {
      seconds = null
    }
    livesCounter--;
    nextButton.classList.remove("hide");

    if(livesCounter === 2) {
      wrongAnswerElement.innerHTML = `<i class="fas fa-heart"> <i class="fas fa-heart">`
    } else if (livesCounter === 1) {
      wrongAnswerElement.innerHTML = `<i class="fas fa-heart">`
    } else {
      wrongAnswerElement.innerHTML = ``
      setTimeout(resetGame, 1000);
    }
}

//quando voce perde o jogo, aparece mensagem e reload da pagina
function resetGame() {
  loserGame.classList.remove("hide")
	maincontent.classList.add("hide")
  timerElement.classList.add("hide")
  progressBarBorder.classList.add("hide");
  /*audio perdedor*/
  audioPerdedor = new Audio("./assets/audio/perdeu-jogo.mp3");
  audioPerdedor.play();
}

Array.from(resetButton).forEach((button) => {
  button.addEventListener("click", () => {
    document.location.reload(true);
  })
})

//quando você ganha o jogo
function winGame() {
  winnerGame.classList.remove("hide")
	maincontent.classList.add("hide")
  timerElement.classList.add("hide")
  progressBarBorder.classList.add("hide");
  /*audio vencedor*/
  audioVencedor = new Audio("./assets/audio/ganhou-jogo.mp3");
  audioVencedor.play();
}
