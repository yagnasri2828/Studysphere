
//Question bank
var questionBank= [
    {
        question : 'Which algorithmic approach is used to break down a problem into smaller subproblems, solve them recursively, and then combine their solutions to form the solution to the original problem?',
        option : ['Greedy algorithm','Divide and conquer','Dynamic programming','Backtracking '],
        answer : 'Divide and conquer'
    },
    {
        question : 'What is the time complexity of binary search, where n is the number of elements in the sorted array?',
        option : ['O(log n)','O(n)',' O(n log n) ','O(n^2)'],
        answer : 'O(log n)'
    },
    {
        question : 'Quick sort is based on which divide and conquer approach? ',
        option : ['Splitting the array into two equal halves',' Splitting the array into two unequal halves','Splitting the array into three equal parts ','Splitting the array into random parts '],
        answer : 'Splitting the array into two unequal halves'
    },
    {
        question : 'Which asymptotic notation represents the worst-case time complexity of an algorithm? ',
        option : ['Big-Oh (O)','Omega (Ω) ','Theta (θ) ','None of the above '],
        answer : 'Big-Oh (O)'
    },
    {
        question : 'If an algorithm has a time complexity of Ω(n^2), which of the following statements is true? ',
        option : ['The algorithm has a lower bound of O(n^2) ','The algorithm has an upper bound of O(n^2) ','The algorithm has both lower and upper bounds of O(n^2) ',' The algorithms time complexity is exactly O(n^2)'],
        answer : 'The algorithm has a lower bound of O(n^2)'
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
