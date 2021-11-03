const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const maincontent = document.getElementById('maincontent')
const loserGame = document.getElementById('loserGame')

let shuffledQuestions, currentQuestionIndex, currentQuestion;

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

answerButtonsElement.addEventListener("click", (event) => {
  const chosenAnswer = event.target;
  console.log(chosenAnswer);
  if (chosenAnswer.innerText === currentQuestion.correctAnswer) {
    chosenAnswer.classList.add("correct");
    nextButton.classList.remove("hide");
	//não deixar clicar nas outras opcoes
  } else {
    chosenAnswer.classList.add("wrong");
    resetGame()
  }
});

function resetGame() {
	maincontent.classList.add("hide")
	loserGame.classList.remove("hide")
}

resetButton.addEventListener("click", () => {
	document.location.reload(true);
});





