const startButton = document.getElementById('start-btn');
const goBackButton = document.getElementById('go-back-btn');
const scoreCard = document.getElementById('score-card');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('quiz-body');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('option-buttons');
const endButton = document.getElementsByClassName('end-btn'); //

let shuffledQuestions, currentQuestionsIndex;
let timer = document.getElementById('timer');

startButton.addEventListener('click', startGame, startTimer);
startButton.addEventListener('click', startTimer);

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

startButton.addEventListener('click', () => {
    goBackButton.classList.add('invisible');
})



/**/
const questions = [
    {
        question: 'JavaScript and Java are the same thing.',
        answers: [
            { text: 'TRUE', correct: false },
            { text: 'FALSE', correct: true }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<scripting>', correct: false },
            { text: '<script>', correct: true },
            { text: '<js>', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script name="xxx.js">', correct: false }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msg("Hello World");', correct: false },
            { text: 'alertBox("Hello world");', correct: false },
            { text: 'msgBox("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true }
        ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { text: 'myFunction()', correct: true },
            { text: 'call function myFunction()', correct: false },
            { text: 'call myFunction()', correct: false }
        ]
    },
]




/**/
function startGame() {
    // hides the start button when function runs... runs when start is clicked
    startButton.classList.add('invisible');

    shuffledQuestions = questions.sort(() => Math.random() - .5);

    currentQuestionsIndex = 0;

    // reveals the preset hidden question container
    questionContainerElement.classList.remove('invisible');

    setNextQuestion();
}


/**/
function startTimer() {
    let timer = 30;
    interval = setInterval(function () {
        timer--;
        if (timer >= 0) {
            span = document.getElementById('timer');
            span.innerHTML = timer;
        }
        if (timer === 0) {
            clearInterval(interval);
            window.location.href = './game-over.html';
        }
    }, 1000)
}


function stopTimer() {

}



/**/
function setNextQuestion() {
    resetState()

    showQuestion(shuffledQuestions[currentQuestionsIndex])
}



/**/
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}




/**/
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('invisible')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}



/**/
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('invisible')
    } else {
        (shuffledQuestions.length == currentQuestionsIndex - 1); {
            alert('Congratulations!')
            window.location.href = './highscore.html';
        }
    }
}


//startButton.innerText = 'Restart'
//startButton.classList.remove('invisible')


/**/
function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}





/**/
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




    





