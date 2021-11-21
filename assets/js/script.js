function buildQuiz() {
    // Variable to store the HTML output
    const output = [];

    //For each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // Variable to store the list of possible answers
            const answers = [];

            // And for each available answer...
            for (letter in currentQuestion.answers) {

                //...add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // Combine output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
};


const quizContainer = document.getElementById("quiz-game");
const startButton = document.getElementById("start-button");
let question = '';

const myQuestions = [
    {
        Question: "Which of these is a JS comment?",
        answers: {
            a: "//",
            b: "<!-->",
            c: "/**/"
        },
        correctAnswer: "a"
    },
    {
        Question: "Which of these is a JS comment?",
        answers: {
            a: "//",
            b: "<!-->",
            c: "/**/"
        },
        correctAnswer: "a"
    },
    {
        Question: "Which of these is a JS comment?",
        answers: {
            a: "//",
            b: "<!-->",
            c: "/**/"
        },
        correctAnswer: "a"
    },
    {
        Question: "Which of these is a JS comment?",
        answers: {
            a: "//",
            b: "<!-->",
            c: "/**/"
        },
        correctAnswer: "a"
    },
    {
        Question: "Which of these is a JS comment?",
        answers: {
            a: "//",
            b: "<!-->",
            c: "/**/"
        },
        correctAnswer: "a"
    },
];

















buildQuiz();

// Add event listeners
startButton.addEventListener('click', showResults);