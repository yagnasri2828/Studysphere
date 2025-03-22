
//Question bank
var questionBank= [
    {
        question : 'Which type of clustering involves partitioning the data into a predetermined number of clusters?',
        option : ['Hierarchical clustering','Density-based clustering',' K-means clustering','Spectral clustering'],
        answer : ' K-means clustering'
    },
    {
        question : 'In the K-means algorithm, what are the additional issues that can affect its performance?',
        option : ['Choice of initial cluster centroids and handling of outliers','Handling of categorical variables and feature scaling',' Determination of the number of clusters and stopping criteria','Management of memory usage and computational complexity'],
        answer : 'Choice of initial cluster centroids and handling of outliers'
    },
    {
        question : 'What is a characteristic of Bisecting K-means?',
        option : ['It merges pairs of clusters iteratively until a stopping criterion is met',' It splits clusters into smaller subclusters based on a predefined criterion','It constructs a dendrogram to represent the hierarchy of clusters','It assigns each data point to the nearest cluster centroid'],
        answer : 'It splits clusters into smaller subclusters based on a predefined criterion'
    },
    {
        question : 'What does DBSCAN stand for?',
        option : [' Density-Based Spatial Clustering of Applications with Noise','Distributed Binary Spatial Clustering Algorithm with Neighbors','Deterministic Boundary Search for Clustering and Navigation','Dense Binary Search Clustering Algorithm with Noise'],
        answer : ' Density-Based Spatial Clustering of Applications with Noise'
    },
    {
        question : 'What is a characteristic of clusters identified by DBSCAN?',
        option : ['They are defined by their centroids','They can vary in size and shape','They are partitioned into a predetermined number of clusters','They are hierarchical in nature'],
        answer : ' They can vary in size and shape'
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
