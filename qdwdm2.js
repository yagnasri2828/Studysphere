
//Question bank
var questionBank= [
    {
        question : ' What are some motivating challenges in data mining?',
        option : ['Data security and encryption',' Data visualization techniques','Handling large datasets and complex data types','Implementing cloud computing solutions'],
        answer : 'Handling large datasets and complex data types'
    },
    {
        question : 'Where did the origins of data mining primarily emerge from?',
        option : ['Computer programming languages',' Statistical analysis and machine learning','Financial markets and stock trading','Social media platforms'],
        answer : 'Statistical analysis and machine learning'
    },
    {
        question : 'Which of the following is NOT a typical data mining task?',
        option : ['Classification','Clustering','Regression','Data storage'],
        answer : 'Data storage'
    },
    {
        question : 'Which preprocessing technique aims to reduce the number of dimensions in a dataset?',
        option : ['Aggregation','Sampling','Dimensionality reduction','Variable transformation'],
        answer : 'Dimensionality reduction'
    },
    {
        question : 'What is a potential benefit of using variable transformation in data preprocessing?',
        option : ['Increasing dataset size',' Simplifying data visualization','Decreasing model interpretability',' Normalizing data distribution'],
        answer : ' Normalizing data distribution'
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
