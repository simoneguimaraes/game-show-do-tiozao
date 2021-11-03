
let level = ['easy', 'medium', 'hard']
let category = ['atualidade', 'literatura', 'ciencia', 'historia', 'geografia', 'logica', 'portugues']

const questions = [
    {
        question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
        level: 'easy',
        category: 'portugues',
        answers: [
            'Asterisco, beneficente, meteorologia, entretido',
            'Asterisco, beneficiente, metereologia, entretido',
            'Asterístico, beneficiente, metereologia, entretido',
            'Asterístico, beneficiente, meteorologia, entertido'
        ],
        correctAnswer: 'Asterisco, beneficente, meteorologia, entretido',
    },
    {
        question: 'Qual o número mínimo de jogadores numa partida de futebol?',
        level: 'easy',
        category: 'atualidade',
        answers: [
            '8',
            '9',
            '7',
            '10'
        ],
        correctAnswer: '7',
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo"?',
        level: 'easy',
        category: 'literatura',
        answers: [
            'Platão',
            'Galileu Galilei',
            'Descartes',
            'Sócrates'
        ],
        correctAnswer: 'Descartes',
    }
]

/*
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

/* 

{ 
    category: 'geografia'
    level: 'medium'
    question: 'Quais o menor e o maior país do mundo?'
    answer-a: 'Mônaco e Canadá'
    answerB: 'Malta e Estados Unidos'
    answerC: 'Nauru e China'
    answerD: 'Vaticano e Rússia'
A: answerD
}
{ 
    category: 'atualidade'
    level: 'medium'
    question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?'
    answer-a: 'O Senhor dos Anéis'
    answerB: 'Dom Quixote'
    answerC: 'O Pequeno Príncipe'
    answerD: 'Harry Potter e a Pedra Filosofal'
A: answerB
}
{ 
    category: 'logica'
    level: 'medium'
    question: 'Quantas casas decimais tem o número pi?'
    answer-a: 'Duas'
    answerB: 'Milhares'
    answerC: 'Vinte'
    answerD: 'Infinitas'
A: answerD
}
{ 
    category: 'ciencia'
    level: 'medium'
    question: 'Atualmente, quantos elementos químicos a tabela periódica possui?'
    answer-a: '113'
    answerB: '118'
    answerC: '109'
    answerD: '108'
A: answerB
}
{ 
    category: 'portugues'
    level: 'medium'
    question: 'O que a palavra "legend" significa em português?'
    answer-a: 'História'
    answerB: 'Lenda'
    answerC: 'Legenda'
    answerD: 'Legendário'
A: answerB
}
{ 
    category: 'atualidades'
    level: 'medium'
    question: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?'
    answer-a: 'Japão e Serra Leoa'
    answerB: 'Austrália e Afeganistão'
    answerC: 'Estados Unidos e Angola'
    answerD: 'Itália e Chade'
A: answer-a
}


//fonte: https://www.todamateria.com.br/perguntas-e-respostas-de-conhecimentos-gerais/
*/


