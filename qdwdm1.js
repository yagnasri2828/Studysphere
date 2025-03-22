//Question bank
var questionBank= [
    {
        question : 'Which data model is commonly used in data warehousing for representing data in a structured and organized manner?',
        option : [' Hierarchical data model','Relational data model','Multidimensional data model','Object-oriented data model'],
        answer : 'Multidimensional data model'
    },
    {
        question : 'Which of the following is NOT a component of the typical data warehouse architecture?',
        option : ['Data Extraction','Data Mining','Data Transformation','Data Storage'],
        answer : 'Data Mining'
    },
    {
        question : 'What is the purpose of a data warehouse implementation?',
        option : ['To design and develop OLTP systems','To analyze real-time data','To create data mining algorithms','To construct and populate a data warehouse'],
        answer : 'To construct and populate a data warehouse'
    },
    {
        question : 'What is the primary objective of moving from data warehousing to data mining?',
        option : ['To store more data','To perform complex queries','To discover hidden patterns and trends','To improve data extraction speed'],
        answer : 'To discover hidden patterns and trends'
    },
    {
        question : 'What is the main advantage of using a multidimensional data model over a relational data model for data analysis?',
        option : [' Simplified data storage',' Faster query performance','Better support for transaction processing','Lower storage costs'],
        answer : 'Faster query performance'
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