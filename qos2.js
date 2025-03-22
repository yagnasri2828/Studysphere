
//Question bank
var questionBank= [
    {
        question : 'What is a process?',
        option : ['A program in execution','A user interface element','A collection of files on disk','A piece of hardware'],
        answer : 'A program in execution'
    },
    {
        question : 'What is a multithreading model?',
        option : ['A way of organizing threads within a process','A way of organizing processes within an operating system','A way of organizing network protocols','A way of organizing files on disk'],
        answer : 'A way of organizing threads within a process'
    },
    {
        question : 'What is a thread?',
        option : ['Programs that directly interact with hardware','Interface to the services provided by the operating system','Low-level programming languages','Applications that run in user mode'],
        answer : 'Interface to the services provided by the operating system'
    },
    {
        question : '7. What are common criteria used for process scheduling?',
        option : ['Network latency, packet loss, jitter','Memory size, disk space, network bandwidth','CPU utilization, throughput, turnaround time','File permissions, user authentication, encryption'],
        answer : 'CPU utilization, throughput, turnaround time'
    },
    {
        question : 'What scheduling algorithm aims to minimize the average waiting time?',
        option : ['Priority Scheduling','SJF (Shortest Job First)','Round Robin','FCFS (First-Come First-Serve)'],
        answer : 'SJF (Shortest Job First)'
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
