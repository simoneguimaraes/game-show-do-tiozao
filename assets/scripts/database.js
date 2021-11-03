
let level = ['fácil', 'médio', 'difícil']
let category = ['atualidade', 'literatura', 'ciencia', 'historia', 'geografia', 'logica', 'portugues']

const questions = [
    {
        question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
        level: 'fácil',
        category: 'portugues',
        answers: [
            'Asterisco, beneficente, meteorologia, entretido',
            'Asterisco, beneficiente, metereologia, entretido',
            'Asterístico, beneficiente, metereologia, entretido',
            'Asterístico, beneficiente, meteorologia, entertido'
        ],
        correctAnswer: 'Asterisco, beneficente, meteorologia, entretido'
    },
    {
        question: 'Qual o número mínimo de jogadores numa partida de futebol?',
        level: 'fácil',
        category: 'atualidade',
        answers: [
            '8',
            '9',
            '7',
            '10'
        ],
        correctAnswer: '7'
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo"?',
        level: 'fácil',
        category: 'literatura',
        answers: [
            'Platão',
            'Galileu Galilei',
            'Descartes',
            'Sócrates'
        ],
        correctAnswer: 'Descartes'
    },
    {
        question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        level: 'fácil',
        category: 'historia',
        answers: [
            'João Goulart',
            'João Figueiredo',
            'Getúlio Vargas',
            'Jânio Quadros'
        ],
        correctAnswer: 'João Goulart'
    },
    {
        question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        level: 'médio',
        category: 'atualidade',
        answers: [
            'O Senhor dos Anéis',
            'Dom Quixote',
            'O Pequeno Príncipe',
            'Harry Potter e a Pedra Filosofal'
        ],
        correctAnswer: 'Dom Quixote'
    },
    {
        question: 'Quantas casas decimais tem o número pi?',
        level: 'médio',
        category: 'logica',
        answers: [
            'Duas',
            'Milhares',
            'Vinte',
            'Infinitas'
        ],
        correctAnswer: 'Infinitas'
    },
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        level: 'médio',
        category: 'ciencia',
        answers: [
            '113',
            '118',
            '109',
            '108'
        ],
        correctAnswer: '118'
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
        level: 'médio',
        category: 'geografia',
        answers: [
            'Mônaco e Canadá',
            'Malta e Estados Unidos',
            'Nauru e China',
            'Vaticano e Rússia'
        ],
        correctAnswer: 'Vaticano e Rússia'
    },
    {
        question: '',
        level: 'difícil',
        category: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correctAnswer: ''
    }
]

/*
{ 
    category: 'portugues'
    level: 'médio'
    question: 'O que a palavra "legend" significa em português?'
    answer-a: 'História'
    answerB: 'Lenda'
    answerC: 'Legenda'
    answerD: 'Legendário'
A: answerB
}
{ 
    category: 'atualidades'
    level: 'médio'
    question: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?'
    answer-a: 'Japão e Serra Leoa'
    answerB: 'Austrália e Afeganistão'
    answerC: 'Estados Unidos e Angola'
    answerD: 'Itália e Chade'
A: answer-a
}


//fonte: https://www.todamateria.com.br/perguntas-e-respostas-de-conhecimentos-gerais/
*/


