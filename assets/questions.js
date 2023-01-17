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
    { question:

    }

]