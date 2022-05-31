const quizData = [
    {
        questao: 'Qual foi o primeiro jogo a ser criado no mundo?',
        aquest: 'Western Gun',
        bquest: 'Spacewar!',
        cquest: 'Tennis for Two',
        dquest: 'Space Race',
        equest: 'Pong',
        correct: 'cquest',
    }, {
        questao: 'Qual o segundo jogo mais vendido na história dos games?',
        aquest: 'Pokémon Red',
        bquest: 'GTA V',
        cquest: 'Terraria',
        dquest: 'Tetris',
        equest: 'Super Mario Bros.',
        correct: 'dquest',
    }, {
        questao: 'Qual o console mais vendido da história?',
        aquest: 'Nintendo DS',
        bquest: 'Playstation 2',
        cquest: 'Game Boy',
        dquest: 'Playstation 1',
        equest: 'Xbox 360',
        correct: 'bquest',
    }, {
        questao: 'Qual o jogo mobile mais jogado do mundo atualmente?(Abril 2022)',
        aquest: 'Subway Surfers',
        bquest: 'Minecraft',
        cquest: 'Clash of Clans',
        dquest: 'PUBG Mobile',
        equest: 'Candy Crush',
        correct: 'aquest',
    }, {
        questao: 'Qual a franquia de jogos que mais faturou na história?',
        aquest: 'Call of Duty',
        bquest: 'Pac-Man',
        cquest: 'GTA',
        dquest: 'Pokémon',
        equest: 'Mario',
        correct: 'equest'
    }
];

const quiz = document.getElementById('quiz');
const respostaEls = document.querySelectorAll('.resposta');
const questionEl = document.getElementById('questao');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.questao;
    a_text.innerText = currentQuizData.aquest;
    b_text.innerText = currentQuizData.bquest;
    c_text.innerText = currentQuizData.cquest;
    d_text.innerText = currentQuizData.dquest;
    e_text.innerText = currentQuizData.equest;
}

function getSelected() {
    let resposta = undefined;

    respostaEls.forEach((respostaEl) => {
        if(respostaEl.checked) {
            resposta = respostaEl.id;
        }
    });

    return resposta;
}

function deselectAnswers() {
    respostaEls.forEach((respostaEl) => {
        respostaEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const resposta = getSelected();

    if(resposta){
        if(resposta === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Você acertou ${score}/${quizData.length} questões.</h2> 
            <button onclick="location.reload()">Tentar de novo</button>`
        }
        
    }

});