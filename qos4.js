
//Question bank
var questionBank= [
    {
        question : 'What is contiguous memory allocation?',
        option : ['Allocating memory based on demand paging','Allocating memory in consecutive blocks','Allocating memory in fixed-size blocks','Allocating memory in non-contiguous blocks'],
        answer : 'Allocating memory in consecutive blocks'
    },
    {
        question : 'What is paging?',
        option : ['Allocating memory dynamically','Moving pages between primary and secondary storage','Dividing memory into variable-sized segments','Dividing memory into equal-sized blocks'],
        answer : 'Dividing memory into equal-sized blocks'
    },
    {
        question : 'How are frames allocated in virtual memory?',
        option : ['Dynamically based on demand paging','Static allocation at system startup','Based on the size of the process','Based on the priority of the process'],
        answer : 'Dynamically based on demand paging'
    },
    {
        question : 'What is page replacement?',
        option : ['Swapping pages between primary and secondary storage','Replacing pages in memory when there is a page fault','Allocating pages to processes based on demand','Allocating pages to processes based on priority'],
        answer : 'Replacing pages in memory when there is a page fault'
    },
    {
        question : 'What is segmentation?',
        option : ['Dividing memory into equal-sized blocks','Moving segments between primary and secondary storage','Dividing memory into variable-sized segments','Allocating memory dynamically'],
        answer : 'Dividing memory into variable-sized segments'
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
