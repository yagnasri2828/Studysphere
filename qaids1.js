
//Question bank
var questionBank= [
    {
        question : 'What is the primary focus of the field of Artificial Intelligence (AI)?',
        option : ['Creating robots that mimic human behavior','Developing software programs to automate manual tasks', 'Replicating human intelligence in machines','Enhancing human creativity and intuition'],
        answer : 'Replicating human intelligence in machines'
    },
    {
        question : 'What does the study of the foundations of Artificial Intelligence involve?',
        option : ['Exploring the mathematical principles behind AI algorithms','Investigating the philosophical implications of AI',' Understanding the biological basis of intelligence','Analyzing the ethical considerations of AI development'],
        answer : 'Investigating the philosophical implications of AI'
    },
    {
        question : 'Which of the following is true regarding the history of Artificial Intelligence?',
        option : ['AI research started in the 21st century','AI development began with the invention of modern computers in the mid-20th century','AI concepts date back to ancient civilization','AI has always been a widely accepted field without any controversies'],
        answer : 'AI development began with the invention of modern computers in the mid-20th century'
    },
    {
        question : 'What is one of the fundamental considerations when designing AI agents?',
        option : ['Maximizing computational complexity','Minimizing human intervention','Ensuring adaptability to all possible environments',' Striking a balance between autonomy and safety'],
        answer : 'Striking a balance between autonomy and safety'
    },
    {
        question : ' What components constitute the structure of agents in Artificial Intelligence?',
        option : ['Sensors, actuators, and decision-making algorithms','Input devices, output devices, and memory units','Hardware components only','Software components only'],
        answer : 'Sensors, actuators, and decision-making algorithms'
    
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
