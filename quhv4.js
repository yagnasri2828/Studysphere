//Question bank
var questionBank= [
    {
        question : 'What is emphasized as a key aspect of harmony in nature according to the concept discussed?',
        option : ['Competition and survival of the fittest','Interconnectedness and mutual fulfillment','Dominance and exploitation',' Isolation and detachment'],
        answer : "Interconnectedness and mutual fulfillment"
    },
    {
        question : 'What are highlighted as the characteristics of nature contributing to its harmony?',
        option : ['Destruction and depletion','Recyclability and self-regulation','Waste and inefficiency','Isolation and stagnation'],
        answer : 'Recyclability and self-regulation'
    },
    {
        question : 'According to the concept of harmony in existence, what is emphasized as the perception of harmony at all levels?',
        option : ['Fragmentation and disconnection','Isolation and segregation','Holistic perception','Dominance and control'],
        answer : 'Holistic perception'
    },
    {
        question : ' How does nature demonstrate interconnectedness and mutual fulfillment among its orders?',
        option : ['By promoting competition and dominance','Through wasteful and inefficient processes','By maintaining recyclability and self-regulation','By encouraging isolation and detachment'],
        answer : 'By maintaining recyclability and self-regulation'
    },
    {
        question : 'What is the term used to describe the ability of nature to reuse and regulate itself?',
        option : ['Fragmentation','Recyclability and self-regulation','Competition and conflict','Segregation and isolation'],
        answer : 'Recyclability and self-regulation'
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