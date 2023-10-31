import getRandomQuestion from './randomQuestions.js';

let currentQuestion = 0;
let score = 0;
let timer;
let userName = null; // Initialize userName as null
let hasClickedStartButton = false;
let userInteracted = false;
let hasPlayedCompletionSound = false;  

let correctAnswers = 0;
let wrongAnswers = 0;
let difference = 0;


function clearLocalStorage() { 
    localStorage.removeItem("userName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("game-id")
}

document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const startButton = document.getElementById("start-button");
    const questionContainer = document.getElementById("question-container");
    const timerDisplay = document.getElementById("timer");
    const resultDisplay = document.getElementById("result");
    const gameUiDisplay = document.getElementById("game-logic")
    const playerInfo = document.getElementById("info");
    const optionsContainer = document.getElementById("options-container");
    const buttonClickSound = document.getElementById("buttonClickSound");
    const timerCompletionSound = document.getElementById("quizOver");
    const kovilMani = document.getElementById("kovil-mani");
    const wrongOptionSelected = document.getElementById("worngOption");
    const restartButton = document.getElementById("restart-button");
    const markContainer = document.getElementById("mark-container");
    const collectDataButton = document.getElementById("collect-data-button")
    const userNameInput = document.getElementById("user-name-input");
    const phoneNumberInput = document.getElementById("phone-number-input");
    const inputContainer = document.getElementById("input-container");
//    answer
    const userAttemptCorrectAnswer = document.getElementById("userCorrect");
    const userAttemptWrongAnswer = document.getElementById("userWrong");
    // score update info (toast msg)
    const scoreUpdateMessage = document.getElementById("score-update-message");
    const connectionMessage = document.getElementById("connection-message");


// Function to clear the local storage 





    // Data collection:
    collectDataButton.addEventListener("click", () => {
        userName = userNameInput.value;
       const phoneNumber = phoneNumberInput.value.trim();

        if (!userName || !phoneNumber) {
            alert("Please Enter both Name and Phone Number");
            return;
        }
        
        // Validation for Username
        if (!/^[A-Za-z]+$/.test(userName)) {
            alert("User Name should contain only letters");
            return;
        }
        // Validation for Phonenumber
        if (!/^\d+$/.test(phoneNumber)) {
            alert("Phone Number should contain only numbers");
            return;
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Phone Number should contain exactly 10 numbers");
            return;
        }
        
        collectDataButton.textContent  = "Loading..";
        // store user name and phone number in local storage.
        localStorage.setItem("userName", userName);
        localStorage.setItem("phoneNumber", phoneNumber);
       
       
        axios.post("http://54.161.94.244:8080/user",{
            "name":userName,
            "phone_number":phoneNumber
        }
        ).then(res=>res.data.data).then(data=>  {
            localStorage.setItem("game-id",data.id);

            connectionMessage.textContent ="";
            console.log("Starting QUIZ");
            startScreen.style.display = "none";
            quizScreen.style.display = "block";
    
            startQuiz();
            // to display this in screen (welcome, [UserName])
            document.getElementById("user-name").textContent = userName;
    }).catch(error =>{
        connectionMessage.textContent = "Failed to connect to the server.Try again"
        console.log(error);

        });
     });


    document.addEventListener("click", async () => {
        userInteracted = true;
    });

    restartButton.addEventListener("click", async () => {
        restartButton.disabled = true
        const id  = localStorage.getItem("game-id") 
        
        scoreUpdateMessage.textContent = "Updating your score to the server ..."
        try{
        await axios.post("http://54.161.94.244:8080/game_score",{
            id:Number(id),
            score:Number(score)
        });
        scoreUpdateMessage.textContent = "Score updated successfully!";
    }catch(error){
        scoreUpdateMessage.textContent = "Score update failed. Please try again later.";

    }

        clearLocalStorage()
        currentQuestion = 0;
        score = 0;
        location.reload();
        startQuiz();
        restartButton.disabled = false
    });




    function stopAudio() {
        timerCompletionSound.pause();
        timerCompletionSound.currentTime = 0;
    }
    if (timerCompletionSound) {
        timerCompletionSound.addEventListener("ended", stopAudio);
    }


    // Check if the user's name is already in localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
        userName = storedUserName;
        hasClickedStartButton = true;
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        document.getElementById("user-name").textContent = userName;
        startQuiz();
    }else{
        userName = userNameInput.value;
    }
    // THis start button is initial page UI button.
    startButton.addEventListener("click", () => {
        buttonClickSound.play();
        if (!hasClickedStartButton) {
            startButton.style.display = "none";


            //Enabling the Input
            inputContainer.style.display = "none";
            inputContainer.style.display = "block";


        }
        


    });


    function startQuiz() {    
        shuffleArray(questions);
        document.getElementById("user-name").textContent = userName;
         
        console.log(` --------------${userName}------------`);
        
        displayQuestion();
        timer = setInterval(updateTimer, 1000);
    }

   
   
    function playSound(isCorrect){
        const correctSound = new Audio('./audio/hindu-bell1.mp3');
        const wrongSound = new Audio('./audio/wrongOption.mp3');

        if(isCorrect){
            correctSound.play();
        }else{
            wrongSound.play();
        }
    }


    function checkAnswer(selectedOption) {
        // console.log(`Selected Option: ${selectedOption}, Correct Answer: ${correctAnswer}`);
        const correctAnswer = questions[currentQuestion].answer;
        // buttonClickSound.play();

        if (selectedOption === correctAnswer) {
            correctAnswers++;
            score++;
            playSound(true);
            console.log(`Score updated: ${score}`);
        }else{
            playSound(false);
            wrongAnswers++;

        }

        currentQuestion++;
        displayQuestion();

        //Update the score display on Menu :
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function updateTimer() {
        let timeLeft = parseInt(timerDisplay.textContent);
        if (timeLeft <= 0) {
            questionContainer.style.display = "none";
            resultDisplay.style.display = "block";
            playerInfo.innerHTML = `Time's up, ${userName} !`;
            resultDisplay.innerHTML = `Your score: ${score} `;
            // Completion Sound;
            if (userInteracted && !hasPlayedCompletionSound) {
                timerCompletionSound.play();
                hasPlayedCompletionSound = true;

            }
             
             const difference = correctAnswers - wrongAnswers;
            
             userAttemptCorrectAnswer.innerHTML =  `Correct Attempt: ${correctAnswers}`
             userAttemptWrongAnswer.innerHTML = ` Wrong Attempt: ${wrongAnswers}`;
            // logic is kept as 25
            if (difference > 25) {
                gameUiDisplay.innerHTML = `You are eligible for a Crackers!🧨`;
 
            }else{
                gameUiDisplay.innerHTML = `Try again`;

            }
            restartButton.style.display = "block";
          
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }
    
    function displayQuestion() {

        const questionData = getRandomQuestion();
        document.getElementById("question").textContent = questionData.question;
        optionsContainer.innerHTML = "";

        questionData.options.forEach((option) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.classList.add("options-button");
            optionButton.addEventListener("click", () => checkAnswer(option, questionData.answer));
            optionsContainer.appendChild(optionButton);
        });

    }
});

