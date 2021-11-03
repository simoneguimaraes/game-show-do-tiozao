const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const maincontent = document.getElementById("maincontent")
const loserGame = document.getElementById("loserGame")
const timerElement = document.getElementById("timer")
const wrongAnswerElement = document.getElementById("wrongAnswer")
const wrongAnswerCounterElement = document.getElementById("wrongAnswerCounter")


let shuffledQuestions, currentQuestionIndex, currentQuestion;
let seconds = 10;

//começar o jogo
playButton.addEventListener("click", startGame);

//quando começar o jogo, esconder o botão play e mostrar as perguntas
function startGame() {
  playButton.classList.add("hide");
  shuffledQuestions = Math.floor(Math.random() * questions.length);
  currentQuestionIndex = 0;
  currentQuestion = questions[shuffledQuestions];
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  updateTimerElement();
  timerCountdown();
  wrongAnswer();
}

//toda vez que eu clicar em confirma, ele vai para a próxima pergunta
nextButton.addEventListener("click", () => {
	currentQuestion = questions[Math.floor(Math.random() * questions.length)]
	setNextQuestion();
});

// a cada nova pergunta, ele vai buscar o array de respostas
function setNextQuestion() {
  questionElement.innerHTML = currentQuestion.question;
  for (let i = 0; i < answerButtonsElement.children.length; i++) {
	  if(answerButtonsElement.children[i].classList.contains("correct")) {
		  answerButtonsElement.children[i].classList.remove("correct")
	  }
    answerButtonsElement.children[i].innerHTML = currentQuestion.answers[i];
  }
}

//funcionalidades de resposta certa e errada
answerButtonsElement.addEventListener("click", (event) => {
  const chosenAnswer = event.target;
  console.log(chosenAnswer);
  if (chosenAnswer.innerText === currentQuestion.correctAnswer) {
    chosenAnswer.classList.add("correct");
    nextButton.classList.remove("hide");
	  //não deixar clicar nas outras opcoes
  } else {
    //nao esta adicionando a classe de resposta errada
    chosenAnswer.classList.add("wrong");
    setTimeout(resetGame, 2000);
    updateWrongAnsCounter();
  }
});

//quando voce perde o jogo, aparece mensagem e reload da pagina
function resetGame() {
	maincontent.classList.add("hide")
	loserGame.classList.remove("hide")
  timerElement.classList.add("hide")
}

resetButton.addEventListener("click", () => {
	document.location.reload(true);
});


//timer com 30 segundos para responder

function updateTimerElement() {
  timerElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function timerCountdown() {
  timerElement.classList.remove('hide')
  let myTimer = setInterval(() => {  
    const timeOver = seconds > 0 
    if(timeOver) {
      seconds--;
    } else {
      clearInterval(myTimer);
    }
    updateTimerElement()
  }, 1000)
}

//3 respostas erradas antes de perder o jogo
function wrongAnswer() {
  wrongAnswerElement.classList.remove("hide")
}

//toda vez que a resposta for errada, contar 1
//quando somar 3, resetar o jogo.
function updateWrongAnsCounter() {
  wrongAnswerCounterElement
}

//TO DO
//resetar timer a cada nova pergunta

//se eu acertar a resposta, esconder o timer

//se a pessoa nao clicar em "proxima pergunta", ir automaticamente em 5 segundos

//está pulando para a proxima pergunta sem responder antes

// nao poder apertar outras respostas depois de acertar a pergunta

// tirar as perguntas do random e nao repetir a pergunta

// aumentar o nível da pergunta -> 3 easy, 3 medium, 3 hard