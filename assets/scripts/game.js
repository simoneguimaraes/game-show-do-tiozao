const playButton = document.getElementById('play-btn')
const confirmButton = document.getElementById('confirm-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex, currentQuestion

//começar o jogo
playButton.addEventListener('click', startGame)

//toda vez que eu clicar em confirma, ele vai para a próxima pergunta
confirmButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion
})

//quando começar o jogo, esconder o botão play e mostrar as perguntas
function startGame() {
	playButton.classList.add('hide')
	shuffledQuestions = Math.floor(Math.random() * questions.length)
	currentQuestionIndex = 0
	currentQuestion = questions[shuffledQuestions]
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function setNextQuestion() {
	questionElement.innerHTML = currentQuestion.question
	for (let i = 0; i < answerButtonsElement.children.length; i++) {
		answerButtonsElement.children[i].innerHTML = currentQuestion.answers[i]
	}
}



answerButtonsElement.addEventListener('click', () => {

})


/*

function correctAnswer() {
	for (let i = 0; i < answerButtonsElement.children.length; i++) {
		if (answerButtonsElement.children[i] = currentQuestion.answers[i]
	}



*/


