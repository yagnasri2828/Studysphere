
//Question bank
var questionBank= [
    {
        question : 'What is the primary focus of knowledge-based agents in Artificial Intelligence?',
        option : ['Mimicking human decision-making processes','Acquiring knowledge from the environment','Using knowledge to reason and make decisions','Following predetermined rules without adaptation'],
        answer : 'Using knowledge to reason and make decisions'
    },
    {
        question : 'What is Propositional Logic primarily concerned with?',
        option : ['Representing knowledge using symbols and rules',' Reasoning about uncertainty and probabilities','Modeling relationships between objects and categories','Expressing statements as combinations of propositions'],
        answer : 'Expressing statements as combinations of propositions'
    },
    {
        question : 'What is the objective of Ontological Engineering?',
        option : [' Designing efficient search algorithms','Developing logical reasoning systems','Creating formal representations of knowledge','Constructing ontologies to model domains'],
        answer : 'Constructing ontologies to model domains'
    },
    {
        question : 'How are mental events and mental objects defined in knowledge representation?',
        option : ['As physical occurrences in the environment','As abstract concepts without physical manifestation','As categories and objects in a domain','As actions performed by agents'],
        answer : 'As abstract concepts without physical manifestation'
    },
    {
        question : 'How does the Internet Shopping World relate to knowledge representation?',
        option : ['It provides a domain for modeling categories and objects',' It serves as a platform for implementing reasoning systems','It facilitates the exchange of information between agents','It offers a testbed for evaluating logic-based agents'],
        answer : ' It provides a domain for modeling categories and objects'
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
