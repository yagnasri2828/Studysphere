
//Question bank
var questionBank= [
    {
        question : 'What are some common operating-system services?',
        option : ['File management, device management, and network management','Internet browsing, gaming, and multimedia playback','Word processing, spreadsheet management, and presentation software','Graphic design, video editing, and 3D modeling'],
        answer : 'File management, device management, and network management'
    },
    {
        question : 'Which part of the operating system provides an interface between the user and the system?',
        option : ['Kernel','System programs','Shell','Device drivers'],
        answer : 'Shell'
    },
    {
        question : 'What are system calls?',
        option : ['Programs that directly interact with hardware','Interface to the services provided by the operating system','Low-level programming languages','Applications that run in user mode'],
        answer : 'Interface to the services provided by the operating system'
    },
    {
        question : 'What is system boot?',
        option : ['Shutting down the operating system','Loading the operating system into memory','Running system programs',' Installing new hardware components'],
        answer : 'Loading the operating system into memory'
    },
    {
        question : 'What is a virtual machine',
        option : ['A physical computer','An operating system running on physical hardware','A software-based emulation of a physical computer','A hardware component used for virtualization'],
        answer : 'A software-based emulation of a physical computer'
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
