
//Question bank
var questionBank= [
    {
        question : 'Which problem involves placing eight queens on an 8x8 chessboard such that no two queens threaten each other?',
        option : ['The Traveling Salesman Problem',' The 8-Queens Problem','The Knapsack Problem','The Subset Sum Problem'],
        answer : ' The 8-Queens Problem'
    },
    {
        question : ' In the 8-Queens Problem, how many queens can be placed on an 8x8 chessboard such that no two queens threaten each other?',
        option : ['6','7',' 8','9'],
        answer : '8'
    },
    {
        question : 'What is the primary objective of the subset sum problem?',
        option : ['Maximizing the number of elements in the subset','Minimizing the sum of elements in the subset','Finding any subset with a specified sum','Finding the subset with the maximum sum'],
        answer : 'Finding any subset with a specified sum'
    },
    {
        question : 'How many colors are typically needed to color a graph with backtracking to ensure no two adjacent vertices share the same color?',
        option : ['Minimum required colors','Maximum possible colors','The number of vertices in the graph','The number of edges in the graph'],
        answer : 'Minimum required colors'
    },
    {
        question : ' In the context of the Hamiltonian Cycle Problem, what is a Hamiltonian cycle?',
        option : ['A cycle that visits every vertex exactly once','A cycle that visits every edge exactly once','A cycle that starts and ends at the same vertex',' A cycle that covers the maximum number of vertices'],
        answer : 'A cycle that visits every vertex exactly once'
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
