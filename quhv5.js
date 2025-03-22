//Question bank
var questionBank= [
    {
        question : 'What is the implication of the holistic understanding of harmony on professional ethics?',
        option : ['Promotion of individual interests over collective well-being','Emphasis on natural acceptance of human values','Exclusivity of ethical human conduct','Disregard for humanistic education'],
        answer : "Emphasis on natural acceptance of human values"
    },
    {
        question : 'According to the holistic understanding of harmony, what characterizes ethical human conduct?',
        option : ['Ambiguity and uncertainty','Definitiveness and clarity','Subjectivity and relativism','Indifference and apathy'],
        answer : 'Definitiveness and clarity'
    },
    {
        question : 'According to the holistic understanding of harmony, what is emphasized in professional ethics?',
        option : [' Competition and conflict',' Fragmentation and disconnection','Interconnectedness and mutual fulfillment','Segregation and isolation'],
        answer : 'Interconnectedness and mutual fulfillment'
    },
    {
        question : 'How does the definitiveness of ethical human conduct impact professional ethics?',
        option : ['It promotes moral relativism','It fosters ambiguity and uncertainty',' It provides clarity and guidance in ethical decision-making','It encourages dishonesty and manipulation'],
        answer : ' It provides clarity and guidance in ethical decision-making'
    },
    {
        question : ' How does the holistic understanding of harmony influence professional ethics?',
        option : ['By promoting competition and conflict','By advocating for fragmentation and disconnection','By emphasizing interconnectedness and mutual fulfillment','By ignoring ethical considerations in professional settings'],
        answer : 'By emphasizing interconnectedness and mutual fulfillment'
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