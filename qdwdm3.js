//Question bank
var questionBank= [
    {
        question : ' In classification, what is the primary objective?',
        option : ['Identifying clusters in data',' Predicting numerical values',' Assigning predefined categories or classes to instances',' Finding correlations between variables'],
        answer : ' Assigning predefined categories or classes to instances'
    },
    {
        question : 'What is the general approach to solving a classification problem?',
        option : ['Unsupervised learning','Reinforcement learning',' Supervised learning','Semi-supervised learning'],
        answer : 'Supervised learning'
    },
    {
        question : 'Which method is used for expressing attribute test conditions in decision tree induction?',
        option : ['Gini Index','Entropy','Chi-square test','Pearson correlation coefficient'],
        answer : 'Chi-square test'
    },
    {
        question : 'What is a potential consequence of model overfitting?',
        option : ['High bias','High variance',' Underfitting','Model instability'],
        answer : 'High variance'
    },
    {
        question : 'What theorem forms the foundation for the Naïve Bayes Classifier?',
        option : ['Central Limit Theorem','Bayes Theorem','Pythagorean Theorem','Eulers Theorem'],
        answer : 'Bayes Theorem'
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