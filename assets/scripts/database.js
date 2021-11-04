
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
        question: 'O que a palavra "legend" significa em português?',
        level: 'fácil',
        category: 'portugues',
        answers: [
            'História',
            'Legenda',
            'Lenda',
            'Conto'
        ],
        correctAnswer: 'Lenda'
    },
    {
        question: 'Qual a nacionalidade de Che Guevara?',
        level: 'fácil',
        category: 'história',
        answers: [
            'Cubana',
            'Peruana',
            'Panamenha',
            'Argentina'
        ],
        correctAnswer: 'Argentina'
    },  
    {
        question: 'Quais as duas datas que são comemoradas em novembro?',
        level: 'fácil',
        category: 'portugues',
        answers: [
            'Independência do Brasil e Dia da Bandeira',
            'Black Friday e Dia da Árvore',
            'Dia do Médico e Dia de São Lucas',
            'Proclamação da República e Dia Nacional da Consciência Negra'
        ],
        correctAnswer: 'Proclamação da República e Dia Nacional da Consciência Negra'
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
        question: 'Em que período da pré-história o fogo foi descoberto?',
        level: 'fácil',
        category: 'historia',
        answers: [
            'Neolítico',
            'Paleolítico',
            'Período da Pedra Polida',
            'Idade Média'
        ],
        correctAnswer: 'Paleolítico'
    },   
    {
        question: 'Qual a montanha mais alta do Brasil?',
        level: 'médio',
        category: 'historia',
        answers: [
            'Pico da Neblina',
            'Pico Paraná',
            'Monte Roraima',
            'Pico da Bandeira'
        ],
        correctAnswer: 'Pico da Neblina'
    },
    {
        question: 'Quem foi o pintor da obra "Guernica"?',
        level: 'médio',
        category: 'historia',
        answers: [
            'Diego Rivera',
            'Salvador Dalí',
            'Paul Cézanne',
            'Pablo Picasso'
        ],
        correctAnswer: 'Pablo Picasso'
    },
    {
        question: 'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?',
        level: 'médio',
        category: 'historia',
        answers: [
            'Caipora',
            'Saci',
            'Boitatá',
            'Negrinho do Pastoreio'
        ],
        correctAnswer: 'Caipora'
    },
    {
        question: 'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',
        level: 'médio',
        category: 'historia',
        answers: [
            'Fabiano fechou o saco antes de sair',
            'Fabiano cortou o saco antes de cair',
            'Fabiano pegou seu paletó antes de sair',
            'Fabiano rasgou seu paletó antes de cair'
        ],
        correctAnswer: 'Fabiano pegou seu paletó antes de sair'
    },
    {
        question: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
        level: 'médio',
        category: 'atualidades',
        answers: [
            'Japão e Serra Leoa',
            'Austrália e Afeganistão',
            'Estados Unidos e Angola',
            'Itália e Chade'
        ],
        correctAnswer: 'Japão e Serra Leoa'
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
        question: 'Quem é o autor de “O Príncipe”?',
        level: 'médio',
        category: 'história',
        answers: [
            'Maquiavel',
            'Montesquieu',
            'Thomas Hobbes',
            'Rousseau'
        ],
        correctAnswer: 'Maquiavel'
    },
    {
        question: 'Quais o menor e o maior país do mundo?',
        level: 'difícil',
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
        question: 'De onde é a invenção do chuveiro elétrico?',
        level: 'difícil',
        category: 'ciência',
        answers: [
            'França',
            'Inglaterra',
            'Brasil',
            'Itália'
        ],
        correctAnswer: 'Brasil'
    },
    {
        question: 'Qual a velocidade da luz?',
        level: 'difícil',
        category: 'ciência',
        answers: [
            '300 000 000 metros por segundo (m/s)',
            '150 000 000 metros por segundo (m/s)',
            '199 792 458 metros por segundo (m/s)',
            '299 792 458 metros por segundo (m/s)'
        ],
        correctAnswer: '299 792 458 metros por segundo (m/s)'
    },
    {
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        level: 'difícil',
        category: 'ciência',
        answers: [
            '12 minutos',
            '1 dia',
            '12 horas',
            '8 minutos'
        ],
        correctAnswer: '8 minutos'
    },
    {
        question: 'Qual a altura da rede de vôlei nos jogos masculino e feminino?',
        level: 'difícil',
        category: 'atualidades',
        answers: [
            '2,5 m e 2,0 m',
            '2,45 m e 2,15 m',
            '1,8 m e 1,5 m',
            '2,43 m e 2,24 m'
        ],
        correctAnswer: '2,43 m e 2,24 m'
    },
    {
        question: 'Em que ordem surgiram os modelos atômicos?',
        level: 'difícil',
        category: 'atualidades',
        answers: [
            'Dalton, Thomson, Rutherford, Rutherford-Bohr',
            'Dalton, Thomson, Rutherford-Bohr, Rutherford',
            'Rutherford-Bohr, Rutherford, Thomson, Dalton',
            'Thomson, Dalton, Rutherford, Rutherford-Bohr'
        ],
        correctAnswer: 'Dalton, Thomson, Rutherford, Rutherford-Bohr'
    },
    {
        question: 'It is six twenty" ou "twenty past six”. Que horas são em inglês?',
        level: 'difícil',
        category: 'atualidades',
        answers: [
            '12:06',
            '2:20',
            '6:20',
            '12:20'
        ],
        correctAnswer: '6:20'
    },
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        level: 'difícil',
        category: 'ciencia',
        answers: [
            '113',
            '118',
            '109',
            '108'
        ],
        correctAnswer: '118'
    }
]

/*
fonte: https://www.todamateria.com.br/perguntas-e-respostas-de-conhecimentos-gerais/
*/


