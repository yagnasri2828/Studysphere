//Question bank
var questionBank= [
    {
        question : 'What is the significance of "Natural Acceptance" in the process of self-exploration in value education?What are some common operating-system services?',
        option : ['Forcing oneself to accept predefined norms and beliefs',"Embracing one's inherent qualities and inclinations",'Rejecting all external influences','Following societal expectations blindly'],
        answer : "Embracing one's inherent qualities and inclinations"
    },
    {
        question : 'In value education, what role does experiential validation play?',
        option : ['It relies solely on theoretical knowledge',' It emphasizes the importance of personal experiences in validating values','It prioritizes conformity over individual experiences',' It dismisses the need for validation altogether'],
        answer : ' It emphasizes the importance of personal experiences in validating values.'
    },
    {
        question : 'According to the basic human aspirations discussed in value education, what contributes to continuous happiness and prosperity?',
        option : ['Material possessions only','External validation from others','Right understanding, relationships, and physical well-being','Achievement of professional success only'],
        answer : 'Right understanding, relationships, and physical well-being'
    },
    {
        question : 'How is "right understanding" defined in value education?',
        option : ['Accepting opinions without questioning them.','Acquiring knowledge without application','Having a clear and accurate perception of oneself and the world','Rejecting all forms of knowledge'],
        answer : 'Having a clear and accurate perception of oneself and the world'
    },
    {
        question : 'Which factor is not considered essential for understanding happiness and prosperity in value education?',
        option : ['Right understanding','Strong relationships','Accumulation of material wealth','Physical well-being'],
        answer : 'Accumulation of material wealth'
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