
//Question bank
var questionBank= [
    {
        question : 'In dynamic programming, what type of problem is typically solved using a multistage graph approach?',
        option : ['All pairs shortest path','Single source shortest path','Optimal binary search trees','Travelling salesman problem'],
        answer : 'Optimal binary search trees'
    },
    {
        question : 'Which algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph?',
        option : ['Floyd-Warshall algorithm','Dijkstras algorithm','Bellman-Ford algorithm','Prims algorithm'],
        answer : 'Floyd-Warshall algorithm'
    },
    {
        question : 'Which dynamic programming problem involves finding an optimal binary search tree for a given sequence of keys?',
        option : ['Optimal binary search trees','Travelling salesman problem','All pairs shortest path','Single source shortest path'],
        answer : 'Optimal binary search trees'
    },
    {
        question : 'In the 0/1 knapsack problem, what does the 0/1 signify?',
        option : ['The problem involves either taking or not taking an item, no fractional amounts allowed','The problem involves selecting items with weights ranging from 0 to 1','The problem involves selecting items with values ranging from 0 to 1','The problem involves selecting either 0 or 1 items'],
        answer : 'The problem involves either taking or not taking an item, no fractional amounts allowed'
    },
    {
        question : 'Which algorithm is used to solve the travelling salesman problem optimally for a small number of cities?',
        option : [' Prims algorithm',' Kruskals algorithm','Bellman-Ford algorithm','Held-Karp algorithm'],
        answer : 'Held-Karp algorithm'
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
