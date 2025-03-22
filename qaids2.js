
//Question bank
var questionBank= [
    {
        question : 'What is the primary objective of problem-solving agents in Artificial Intelligence?',
        option : ['To mimic human decision-making processes exactly','To efficiently find solutions to problems', 'To follow a predetermined set of rules','To generate random actions without considering the problemEnhancing human creativity and intuition'],
        answer : 'To efficiently find solutions to problems'
    },
    {
        question : 'What does searching for solutions entail in problem-solving?',
        option : ['Randomly generating actions until a solution is found',' Systematically exploring possible actions to reach a goal state',' Using predetermined rules without exploration',' Ignoring possible solutions and proceeding randomly'],
        answer : ' Systematically exploring possible actions to reach a goal state'
    },
    {
        question : 'What characterizes uninformed search strategies in problem-solving?',
        option : ['They rely on domain-specific knowledge to guide search','They explore the search space without considering the problem structure','They use heuristics to prioritize actions','They generate solutions based on a fixed set of rules'],
        answer : 'They explore the search space without considering the problem structure'
    },
    {
        question : 'Local search algorithms are typically used for:',
        option : ['Finding optimal solutions to problems',' Exploring the entire search space exhaustively',' Optimizing solutions in large search spaces','Solving problems without constraints'],
        answer : 'Optimizing solutions in large search spaces'
    },
    {
        question : 'What is the primary goal of local search algorithms in optimization problems?',
        option : ['To find a solution that satisfies all constraints',' To explore the entire search space exhaustively','To identify the globally optimal solution','To improve the current solution iteratively'],
        answer : 'To improve the current solution iteratively'
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
