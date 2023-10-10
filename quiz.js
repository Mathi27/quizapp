import questions from './question.js';

  //shuffle the question pattern
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let currentQuestion = 0;
let score = 0;
let timer;
let userName = null; // Initialize userName as null
let hasClickedStartButton = false;
let userInteracted = false; 

//clear cache 
function clearUserNameFromLocalStorage(){
    localStorage.removeItem("userName");
    userName = null;
}



document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const startButton = document.getElementById("start-button");
    const questionContainer = document.getElementById("question-container");
    const timerDisplay = document.getElementById("timer");
    const resultDisplay = document.getElementById("result");
    const optionsContainer = document.getElementById("options-container");
    const buttonClickSound = document.getElementById("buttonClickSound");
    const timerCompletionSound = document.getElementById("bellSound");
    const restartButton = document.getElementById("restart-button");
    document.addEventListener("click", () => {
        userInteracted = true;
    });

     restartButton.addEventListener("click",()=>{
        localStorage.removeItem("userName");
        userName = null;

        currentQuestion = 0;
        score = 0;
        location.reload();          
    });

    startButton.addEventListener("click", () => {
        buttonClickSound.play();
        
    });
    
     
   

    function stopAudio() {
        timerCompletionSound.pause();
        timerCompletionSound.currentTime = 0;
    }
    if(timerCompletionSound){
        timerCompletionSound.addEventListener("ended", stopAudio);
    }

    
    // Check if the user's name is already in localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
        userName = storedUserName;
        hasClickedStartButton = true; // made the flag set true.
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        document.getElementById("user-name").textContent = userName;
        startQuiz();
    }

    startButton.addEventListener("click", () => {
        buttonClickSound.play(); 
        if (!hasClickedStartButton) {
            userName = prompt("Enter your Name | பெயர் ");
            if (!userName) {
                alert("பெயர் | Please Enter Your Name :");
                return;
            }
            hasClickedStartButton = true; //  made this flag to true
          
            localStorage.setItem("userName", userName);
            setTimeout( ()=>{
                clearUserNameFromLocalStorage();
                alert("User Name cleared from Cache !");
                console.log("Cache cleared.");
                console.log("65 seconds cleared");
            },65000); //65 seconds
        }
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        document.getElementById("user-name").textContent = userName;
        startQuiz();

      
    });


    function startQuiz() {
        shuffleArray(questions);
        
        document.getElementById("user-name").textContent = userName;
        displayQuestion();
        timer = setInterval(updateTimer, 1000);
    }

    function displayQuestion() {
        if (currentQuestion < questions.length) {
            const questionData = questions[currentQuestion];
            document.getElementById("question").textContent = questionData.question;
            optionsContainer.innerHTML = "";

            questionData.options.forEach((option) => {
                const optionButton = document.createElement("button");
                optionButton.textContent = option;
                optionButton.classList.add("options-button");
                optionButton.addEventListener("click", () => checkAnswer(option,questionData.answer));
                optionsContainer.appendChild(optionButton);
            });
        } else {
            clearInterval(timer);
            questionContainer.style.display = "none";
            resultDisplay.style.display = "block";
            questionContainer.innerHTML = "Quiz completed!";
            resultDisplay.innerHTML = `Congratulations, ${userName}! Your score: ${currentQuestion} / ${questions.length}`;

            // need to send this data to node.js server if i want.
        }
    }

    function updateTimer() {
        let timeLeft = parseInt(timerDisplay.textContent);
        if (timeLeft <= 0) {
            questionContainer.style.display = "none";
            resultDisplay.style.display = "block";
            resultDisplay.innerHTML = `Time's up, ${userName}! Your score: ${score} `;
            // Completion Sound;
            if(userInteracted){
                timerCompletionSound.play();

            }
            if(score > 30){
                resultDisplay.innerHTML += `You are eligible for a Crackers!🧨`;

            }
            restartButton.style.display = "block";
            // also send this data to node js server.
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }

    function checkAnswer(selectedOption) {
        // console.log(`Selected Option: ${selectedOption}, Correct Answer: ${correctAnswer}`);
        const correctAnswer = questions[currentQuestion].answer;
        buttonClickSound.play();

        if(selectedOption === correctAnswer){
            score++;
            console.log(`Score updated: ${score}`);
        }

        currentQuestion++;
        displayQuestion();

        //Update the score display on Menu :
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.textContent = `Score: ${score}`;
      
    }

    // startQuiz();
});
