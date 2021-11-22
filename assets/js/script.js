const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('quiz-body');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('option-buttons');

let shuffledQuestions, currentQuestionsIndex;
let timer = document.getElementById('timer');

startButton.addEventListener('click', startGame);
startButton.addEventListener('click', startTimer);

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})



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

function startTimer() {
    let timer = 30;
    setInterval(function() {
        timer--;
        if (timer >= 0) {
            span = document.getElementById('timer');
            span.innerHTML = timer;
        }
        if (timer === 0) {
            alert('Out of time!');
            clearInterval(timer);
        }
    }, 1000)
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
        startButton.innerText = 'Restart'
        startButton.classList.remove('invisible')
    }
}


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



/**/
const questions = [
    {
        question: 'JavaScript and Java are the same thing.',
        answers: [
            { text: 'TRUE', correct: true },
            { text: 'FALSE', correct: false }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<scripting>', correct: false },
            { text: '<js>', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script name="xxx.js">', correct: false }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'alert("Hello World");', correct: true },
            { text: 'msg("Hello World");', correct: false },
            { text: 'alertBox("Hello world");', correct: false },
            { text: 'msgBox("Hello World");', correct: false }
        ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { text: 'myFunction()', correct: true },
            { text: 'call function myFunction()', correct: false },
            { text: 'call myFunction()', correct: false }
        ]
    }
]


