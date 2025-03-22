//Question bank
var questionBank= [
    {
        question : 'According to the concept of harmony in the human being, what constitutes the co-existence within oneself',
        option : ['Sentient "I" and external environment','Sentient “I” and societal norms','Sentient “I” and material “Body','Sentient “I” and material possessions'],
        answer : 'Sentient “I” and material “Body"'
    },
    {
        question : 'According to the understanding of harmony in the human being, what role does "I" play?',
        option : ['Only as a passive observer','As the sole doer, seer, and enjoyer','As a detached entity from the “Body”','As an insignificant aspect of human existence'],
        answer : 'As the sole doer, seer, and enjoyer'
    },
    {
        question : 'What concept emphasizes moderation and self-discipline in maintaining harmony between the “I” and the “Body”?',
        option : ['Happiness','Prosperity','Sanyam','Health'],
        answer : 'Sanyam'
    },
    {
        question : 'In understanding harmony in the human being, what does "Sanyam" refer to?',
        option : [' Excessive indulgence in material pleasures','Complete abandonment of physical needs','Moderation and self-discipline','Ignoring the needs of the "I"'],
        answer : 'Moderation and self-discipline'
    },
    {
        question : 'According to the concept of harmony in the human being, what does "Prosperity" entail?',
        option : ['Accumulation of material wealth at any cost','Spiritual enlightenment only','Balanced growth and well-being encompassing both the “I” and the “Body”','Social status and recognition'],
        answer : 'Balanced growth and well-being encompassing both the “I” and the “Body”'
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