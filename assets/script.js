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

//highscore input element
var scoreForm = document.createElement('form');

//highschool initial input
var userScore = document.createElement('input');
userScore.className = 'user-score';
userScore.type = 'text';
userScore.placeholder = 'Enter Initials';
spaceForm.appendChild(userScore);

//highschore submit button
var scoreBtn = document.createElement('button');
scoreBtn.className ='submit-btn'
scoreBtn.type = 'submit'
scoreBtn.textContent = 'Submit Highscore'
scoreForm.appendChild(scoreBtn);

//go back/restart quiz button
var goBackBtn = document.createElement('button'); //go back button
goBackBtn.className = ('go-back')
goBackBtn.textContent = 'Go Back'

//clear highscores button
var clearScoreBtn = document.createElement('button'); //clear highscore button
clearScoreBtn.className = 'clear-score'
clearScoreBtn.textContent = 'Clear Highscores'

var startGame = function(){
    timeLeft = 75; //timer to initial value
    mainHead.remove();//removes initial main heading
    mainP.remove();//removes initial main paragraph
    startBtnEl.remove();//remove start button


timeInt = setInterval(function(){ . //declare global variable for timer
if (timeLeft > 0) {
    timerEl.textContent ='Time' + timeLeft; //write timeLeft to the timer element
    timeLeft--; //decrement timer every interval

} else {
    timerEl.textContent = ''; //remove timer from screen
    clearInterval(timeInt); //clear timer
    stopGame();
}

}, 1000);

createQuestion();

}

var createQuestion = function() { //generates a question from the list
    questionHead.textContent = questionList[questionCount].question;
    pageContentEl.appendChild(questionHead);//add h1 to page (question)

    questionDiv.textContent ='';
    pageContentEl.appendChild(questionDiv); //add ol to page (container)

    questionBtnOne.textContent = questionList[questionCount].answerOne;
    questionDiv.appendChild(questionBtnOne); //add button to ol (option 1)

    questionBtnTwo.textContent = questionList[questionCount].answerTwo;
    questionDiv.appendChild(questionBtnTwo); //add button to ol (option 2)

    questionBtnThree.textContent = questionList[questionCount].answerThree;
    questionDiv.appendChild(questionBtnThree); //add button to ol (option 3)

    questionBtnFour.textContent = questionList[questionCount].answerFour;
    questionDiv.appendChild(questionBtnFour); //add button to ol (option 4)



//Click listeners
var questionOneBtnEl= document.querySelector('.question-btn-one');
questionOneBtnEl.addEventListener('click', newQuestion);
var questionTwoBtnEl =document.querySelector('.question-btn-two');
questionTwoBtnEl.addEventListener('click', newQuestion);
var questionThreeBtnEl = document.querySelector('.question-btn-three');
questionThreeBtnEl.addEventListener('click', newQuestion);
var questionFourBtnEl = document.querySelector('.question-btn-four');
questionFourBtnEl.addEventListener('click', newQuestion);
}

var newQuestion = function(event){
    correctAns.remove();
    incorrectAns.remove();

var btnPressed = event.target; //define btnPressed as whichever button was clicked 
if (btnPressed.className === questionList[questionCount].solution && questionCount < questionList.length -1)
{ //check if the button is the same as the solution
    questionCount++;
    createQuestion();
    pageContentEl.appendChild(correctAns);
}  else if (btnPressed.className != questionList[questionCount].solution && questionCount < questionList.length -1)
{
    timeLeft -= 10;
    questionCount++;
    createQuestion();
    pageContentEl.appendChild(correctAns);
    return;
} else if (btnPressed.className === questionList[questionCount].solution) {//check if it is the last question
    stopGame();
    pageContentEl.appendChild(correctAns);
    return;
} else {
    timeLeft -=10;
    stopGame();
    pageContentEl.appendChild(incorrectAns);
    return;
   }
}

function stopGame() { //once the timer hits zero or all questions have been answered, run this function
    clearInterval(timeInt); //stop time
    if (timeLeft >=0 ) { //make sure time does not go negative
        timerEl.textContent = 'Time' + timeLeft;

    } else {
        timeLeft = 0;
        timerEl.textContent = 'Time:' + timeLeft;
    }
   

    questionHead.textContent = 'All Done!';
    questionDiv.textContent = 'Your final score is ' + timeLeft;
    questionDiv.appendChild(scoreForm);
    document.addEventListener('submit', function(event) {
        event.preventDefault();
        localStorage.setItem(userScore.value, this.timeLeft);
        highScore();
    });

}
  var highScore =function(){
    try {
        clearInterval(timeInt);
    }catch{}
    headerEL.remove(); //removes top header
    mainHead.remove(); //removes initial main heading
    mainP.remove(); //removes initial main paragraph
    startBtnEl.remove(); //removes start button
    correctAns.remove();
    incorrectAns.remove();

    pageContentEl.appendChild(questionHead);
    pageContentEl.appendChild(questionDiv);

    questionHead.textContent = 'High Scores'
    questionDiv.textContent = ''
    var highScoreList = [];
    for (let i = 0; i < localStorage.length; i++) {// loop through high scores
        highScoreList.push(localStorage.getItem(localStorage.key(i)) + ' - ' + localStorage.key(i)); //get highscore key and value
        highScoreList.sort(),reverse(); //sort highscores with highest on top

    }

    for (let i = 0; i < highScoreList.length; i++) { //loop to add highscores to screen
        var highScoreListItem = document.createElement('li') //turn highscore into list item
        highScoreListItem.className = 'score-list'
        highScoreListItem.textContent = highScoreList[i]; //add content to list item
        questionDiv.append(highScoreListItem); //add list items to ol
    }

    pageContentEl.appendChild(goBackBtn);
    pageContentEl.appendChild(clearScoreBtn);

    goBackBtn.addEventListener('click', goBack);
    clearScoreBtn.addEventListener('click', clearScore);
  }

  var goBack =function() {
    window.location.reload();

  }

  var clearScore = function() {
    localStorage.clear();
    alert('The high scores have been cleared');
    window.location.reload();
  }