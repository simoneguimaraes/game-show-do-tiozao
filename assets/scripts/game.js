const playButton = document.getElementById('play-btn')
const confirmButton = document.getElementById('confirm-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

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
	shuffledQuestions = questions.sort(() => Math.random() * 3)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}





const questions = [
    {
        question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
        level: 'easy',
        category: 'portugues',
        answers: {
          a: 'Asterisco, beneficente, meteorologia, entretido',
          b: 'Asterisco, beneficiente, metereologia, entretido',
          c: 'Asterístico, beneficiente, metereologia, entretido',
          d: 'Asterístico, beneficiente, meteorologia, entertido',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Qual o número mínimo de jogadores numa partida de futebol?',
        level: 'easy',
        category: 'atualidade',
        answers: {
          a: '8',
          b: '9',
          c: '7',
          d: '10',
        },
        correctAnswer: 'c',
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo"?',
        level: 'easy',
        category: 'literatura',
        answers: {
          a: 'Platão',
          b: 'Galileu Galilei',
          c: 'Descartes',
          d: 'Sócrates',
        },
        correctAnswer: 'c',
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo"?',
        level: 'easy',
        category: 'literatura',
        answers: {
          a: 'Platão',
          b: 'Galileu Galilei',
          c: 'Descartes',
          d: 'Sócrates',
        },
        correctAnswer: 'c',
    },
    {
        question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        level: 'easy',
        category: 'historia',
        answers: {
          a: 'João Goulart',
          b: 'João Figueiredo',
          c: 'Getúlio Vargas',
          d: 'Jânio Quadros',
        },
        correctAnswer: 'a',
    }
];


