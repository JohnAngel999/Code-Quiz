//global variable definitions 
var headerEL = document.querySelector('.header'); //sets var for header
var mainP =document.querySelector('#main-p'); //sets var for main paragraph
var timerEl =document.querySelector('#timer'); //set var for timer element
var startBtnEl = document.querySelector('#startBtn'); //set var for start button
var mainHead = document.querySelector('#main-head') //sets var for main h1 element
var pageContentEl = document.querySelector('.page-content'); //sets var for page content
var highscoreBtnEl = document.querySelector('.view-high-score'); //sets var for high score button
var questionCount = 0; //counts how many questions have been asked
var questionNum = {}; //empty object to pass questions through

//timer variable
var timeLeft = 0; //sets timer to 75
timerEl.textContent= 'Time: ' + timeLeft;

//var for whether of not user got answer right
var correctAns = document.createElement('div');
correctAns.className = 'user-answer'
correctAns.textContent = 'Previous Question: CORRECT!'
var incorrectAns = document.createElement('div');
incorrectAns.className = 'user-answer'
incorrectAns.textContent = 'Previous Question: Wrong!'

//create question objects
var questionList = [
    { question: 'Commonly used data types Do NOT include:', answerOne: 'Strings',
    answerTwo: 'Boolean', answerThree: 'Alerts', answerFour: 'Numbers', solution:'question-btn-three'},

    { question: 'The condition in an if / else statement is enclosed with:',
    answerOne: 'Quotes', answerTwo: 'Curly brackets', answerThree: 'Parenthesis', 
     answerFour:'Square brackets', solution: 'question-btn-two',
    },
    
    {
        question: 'Arrays can be used to store:', answerOne:'Numbers and Strings', answerTwo: 'Other Arrays',
        answerThree:'Booleans', answerFour: 'All of the above', solution:'question-btn-four'
    },

    {
        question: 'String values must be enclosed within __ when being assigned to variables.', answerOne: 'Quotes',
        answerTwo:'Curly brackets', answerThree:'Parenthesis', answerFour:'Square Brackets', solution: 'question-btn-one'
    },

    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answerOne: 'JavaScript', answerTwo:'Terminal/Bash', answerThree:'For Loops', answerFour: 'Console Log', solution:'question-btn-four'
    }
];

//create question HTML elements
var questionHead = document.createElement('h1'); //h1 element
questionHead.className = 'question-head';
var questionDiv = document.createElement('ol'); //ordered list element
questionDiv.className = 'question-list'
var questionBtnOne = document.createElement('button'); //button element
questionBtnOne.className ='question-btn-one'
questionBtnOne.id = 'question-btns'
var questionBtnTwo =document.createElement('button'); //button element
questionBtnTwo.className ='question-btn-two'
questionBtnTwo.id = 'question-btns'
var questionBtnThree = document.createElement('button'); //button element
questionBtnThree.className = 'question-btn-three'
questionBtnThree.id = 'question-btns'
var questionBtnFour =document.createElement('button'); //button element
questionBtnFour.className = 'question-btn-four'
questionBtnFour.id ='question-btns'