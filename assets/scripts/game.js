const logoElement = document.getElementById("logo");
const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const maincontent = document.getElementById("maincontent")
const loserGame = document.getElementById("loserGame")
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


let shuffledQuestions, currentQuestionIndex, currentQuestion, questionLevelIndex, isCorrect;
let seconds;

//página inicial
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
  points.classList.remove("hide");
}

//quando clicar em instrucoes, mostrar um texto
function gameInstructions() {
  
  gameTitleElement.innerHTML = `Instruções`;
  instructionButtonElement.classList.add("hide");
  instructionElement.classList.remove("hide");
  logoElement.classList.add("hide");
  instructions.classList.remove("hide")

  //--->inserir texto
  
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
  nextButton.classList.add("hide");
});

// a cada nova pergunta, ele vai buscar o array de respostas
function setNextQuestion() {
  if (questionLevelIndex === 10) {
    return resetGame();
  }
  
  seconds = 30;
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
  const chosenAnswer = event.target;
  if(chosenAnswer.classList.contains('btn')) {
    if (chosenAnswer.innerText === currentQuestion.correctAnswer) {
      chosenAnswer.classList.add("correct");
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
      wrongAnswer();
      chosenAnswer.classList.add("wrong");
    }
  } 
});

//quando voce perde o jogo, aparece mensagem e reload da pagina
function resetGame() {
  loserGame.classList.remove("hide")
	maincontent.classList.add("hide")
  timerElement.classList.add("hide")
  progressBarBorder.classList.add("hide");
}

resetButton.addEventListener("click", () => {
	document.location.reload(true);
});


//timer com 30 segundos para responder
function updateTimerElement() {
  timerElement.innerHTML = `<i class="fas fa-clock">`
  timerElement.innerHTML += ` ${seconds}` //< 10 ? `0${seconds}` : seconds;
}

function timerCountdown() {
  timerElement.classList.remove('hide')
  
  let myTimer = setInterval(() => {  
    const timeOver = seconds > 0 
    if(timeOver) {
      seconds--;
    } else {
      clearInterval(myTimer);
      wrongAnswer();
    }
    updateTimerElement()
  }, 1000)
}



//3 respostas erradas antes de perder o jogo
function wrongAnswer() {
  wrongAnswerCounterElement.innerHTML = (Number(wrongAnswerCounterElement.innerText) - 1)
  //changeIconAnswersWrong();
  if((wrongAnswerCounterElement.innerText) === ``) {
    setTimeout(resetGame, 2000);
  }
}

function updateWrongAnsCounter() {
  wrongAnswerCounterElement--
}

//--->mudar o número das 3 vidas para icones

function changeIconAnswersWrong() {
  if(Number(wrongAnswerCounterElement.innerText) === 3) {
    wrongAnswerCounterElement.innerHTML = `<i class="fas fa-heart"> <i class="fas fa-heart"> <i class="fas fa-heart">`
  } else if (Number(wrongAnswerCounterElement.innerText) === 2) {
    wrongAnswerCounterElement.innerHTML = `<i class="fas fa-heart"> <i class="fas fa-heart">`
  } else if (Number(wrongAnswerCounterElement.innerText) === 1) {
    wrongAnswerCounterElement.innerHTML = `<i class="fas fa-heart">`
  } else {
    wrongAnswerCounterElement.innerHTML = ``
  }
} 



//ISSUES
//icone de vidas nao está funcionando
//ver a questao de como voce perde no jogo
//o nível de dificuldade nao está funcionando
//a progress bar não está funcionando
//colocar o hover no desktop


//mudar a cor do progress bar de acordo com o nível
// o que acontece quando a pessoa passa de nivel
// o que acontece quando ela ganha o jogo

//MELHORAR
//colocar audio
//colocar aba com instrucoes
// ao inves de "Jogar De Novo" ir para a pagina inicial, ir para a primeira pergunta
//se a pessoa nao clicar em "proxima pergunta", ir automaticamente em 5 segundos
