
//Question bank
var questionBank= [
    {
        question : 'In the Knapsack Problem, which of the following is true? ',
        option : ['Items can be partially taken ','Items cannot be split ','Items can only be taken as a whole ','Items are always taken in a random order'],
        answer : 'Items cannot be split'
    },
    {
        question : 'Job sequencing with deadlines involves: ',
        option : ['Minimizing the number of jobs ','Maximizing the number of jobs completed ','Meeting deadlines of jobs with different time limits ',' Ignoring deadlines to complete jobs as fast as possible'],
        answer : 'Meeting deadlines of jobs with different time limits '
    },
    {
        question : 'Which algorithm is used to find the Minimum-cost spanning trees? ',
        option : ['Depth-First Search (DFS) ','Breadth-First Search (BFS) ','Prims Algorithm ','Dijkstras Algorithm'],
        answer : 'Prims Algorithm '
    },
    {
        question : 'Which technique is employed in Huffman coding? ',
        option : ['Lossy compression ','Dynamic programming ','Greedy approach ','Divide and conquer'],
        answer : 'Greedy approach '
    },
    {
        question : 'What does the Greedy Method primarily rely on? ',
        option : ['Exhaustive search through all possible solutions ','Heuristic approach to minimize computational complexity ','Making locally optimal choices at each stage ','Random selection of solutions'],
        answer : 'Making locally optimal choices at each stage '
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
