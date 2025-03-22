
//Question bank
var questionBank= [
    {
        question : 'What is the primary objective of data science?',
        option : ['To collect and store data in databases','To analyze and extract insights from data','To design algorithms for artificial intelligence','To develop software applications for data visualization'],
        answer : 'To analyze and extract insights from data'
    },
    {
        question : 'What does "datafication" refer to in the context of data science?',
        option : ['The process of collecting and organizing data','The transformation of physical processes into digital data','The visualization of data using charts and graphs','The application of statistical methods to analyze data'],
        answer : 'The transformation of physical processes into digital data'
    },
    {
        question : 'What is the role of a data scientist in the data science process?',
        option : [' Collecting and storing data in databases','Developing software applications for data visualization','Analyzing data and extracting insights using statistical methods','Designing algorithms for artificial intelligence'],
        answer : 'Analyzing data and extracting insights using statistical methods'
    },
    {
        question : 'What is a NumPy ndarray?',
        option : [' A data visualization tool',' A multidimensional array object','A database management system','A machine learning algorithm'],
        answer : ' A multidimensional array object'
    },
    {
        question : 'What operations can be performed between arrays and scalars in NumPy?',
        option : ['Only addition and subtraction','Only multiplication and division','Addition, subtraction, multiplication, and division','Only exponentiation'],
        answer : 'Addition, subtraction, multiplication, and division'
    }
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
