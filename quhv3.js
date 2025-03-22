//Question bank
var questionBank= [
    {
        question : 'In the context of human-human relationships, what does the term "Justice" encompass?',
        option : ['Only legal proceedings','Fairness and equality','Subjugation of others','Exploitation of vulnerabilities'],
        answer : "Fairness and equality"
    },
    {
        question : 'Which values are highlighted as foundational in relationships according to the understanding of harmony in family and society?',
        option : ['Deception and manipulation','Trust and respect',' Dishonesty and betrayal','Selfishness and greed'],
        answer : 'Trust and respect'
    },
    {
        question : 'According to the concept of harmony in society, what does a universal harmonious order entail?',
        option : ['Segregation and discrimination','Division and conflict','Unity and coexistence','Oppression and exploitation'],
        answer : 'Unity and coexistence'
    },
    {
        question : 'What is the term used to describe a harmonious societal order that transcends boundaries and divisions?',
        option : [' Isolated society','Undivided society','Segregated society','Fragmented society'],
        answer : 'Undivided society'
    },
    {
        question : 'According to the understanding of harmony in family and society, what is the significance of "Gratitude" in relationships?',
        option : ['Manipulation and exploitation','Deception and betrayal','Recognition and appreciation','Indifference and apathy'],
        answer : 'Recognition and appreciation'
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