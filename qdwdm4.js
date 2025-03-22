
//Question bank
var questionBank= [
    {
        question : 'What principle is central to the Apriori algorithm?',
        option : ['Maximum likelihood estimation','Minimum support threshold',' Maximum entropy principle','Naive Bayes assumption'],
        answer : 'Minimum support threshold'
    },
    {
        question : 'Which algorithm is based on the concept of generating frequent itemsets without candidate generation?',
        option : ['Apriori algorithm','FP-Growth algorithm','K-means algorithm','Decision tree algorithm'],
        answer : 'FP-Growth algorithm'
    },
    {
        question : 'What does the compact representation of frequent itemsets aim to achieve?',
        option : ['Reducing the computational complexity of the algorithm','Improving the interpretability of the association rules','Reducing memory usage and storage requirements','Speeding up the process of frequent itemset generation'],
        answer : 'Reducing memory usage and storage requirements'
    },
    {
        question : 'What property does the FP-Growth algorithm exploit to efficiently mine frequent itemsets?',
        option : ['Candidate generation','Breadth-first traversal','Depth-first traversal',' Conditional pattern base and FP-tree'],
        answer : ' Conditional pattern base and FP-tree'
    },
    {
        question : 'Which algorithm is generally more efficient for large datasets with high dimensionality?',
        option : ['Apriori algorithm','FP-Growth algorithm','K-means algorithm',' Decision tree algorithm'],
        answer : ' FP-Growth algorithm'
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
