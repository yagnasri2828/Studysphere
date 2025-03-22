
//Question bank
var questionBank= [
    {
        question : 'Which problem involves sequencing jobs to maximize profit while meeting deadlines?',
        option : ['The 0/1 Knapsack Problem','The Traveling Salesperson Problem','Job Sequencing with Deadlines','Graph Coloring Problem'],
        answer : 'Job Sequencing with Deadlines'
    },
    {
        question : 'In job sequencing with deadlines, what does LIFO stand for in LIFO Branch and Bound?',
        option : ['Last-In-First-Out','Latest-In-First-Out',' Least-In-First-Out','Last-Item-First-Out'],
        answer : 'Last-In-First-Out'
    },
    {
        question : 'Which branch and bound technique prioritizes the most recently added nodes for expansion in job sequencing with deadlines?',
        option : ['LC Branch and Bound','FIFO Branch and Bound','LIFO Branch and Bound','FILO Branch and Bound'],
        answer : 'LIFO Branch and Bound'
    },
    {
        question : 'In the 0/1 knapsack problem, what does LC stand for in LC Branch and Bound?',
        option : ['Lowest Cost','Least Costly',' Least Capacity','Linear Combination'],
        answer : 'Least Capacity'
    },
    {
        question : 'What is the primary objective of branch and bound algorithms?',
        option : ['Minimize memory usage','Minimize time complexity','Minimize the number of recursive calls','Minimize the computation time by pruning suboptimal solutions'],
        answer : 'Minimize the computation time by pruning suboptimal solutions'
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
