import {questions} from './question.js';


//shuffle the question pattern Logic
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
let hasPlayedCompletionSound = false;  

let correctAnswers = 0;
let wrongAnswers = 0;
let difference = 0;
let currentLevel = 0;
let confettiOverlay;
// Suppose the user selected Level 1 (value "0")
let selectedLevel = "0";
let selectedQuestions;


// clear locals
function clearLocalStorage() { 
    localStorage.removeItem("userName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("game-id");
}
// DOMContent after loading...
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
    const hiringBanner = document.getElementById("banner");
 
    function showConfettiOverlay() {
        // Create the confetti overlay element
        confettiOverlay = document.createElement('div');
        confettiOverlay.classList.add('confetti-overlay');
    
        // Add the confetti container HTML to the overlay
        confettiOverlay.innerHTML = `         
    <div class="confetti-container" id="confettiOverlay">
    <div class="confetti">
      <i style="--speed: 10; --bg: yellow" class="square"></i>
      <i style="--speed: 18; --bg: white" class="pentagram"></i>
      <i style="--speed: 29; --bg: green" class="rectangle"></i>
      <i style="--speed: 17; --bg: blue" class="hexagram"></i>
      <i style="--speed: 33; --bg: red" class="pentagram"></i>
      <i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 5; --bg: blue" class="wavy-line"></i>
      <i style="--speed: 40; --bg: white" class="square"></i>
      <i style="--speed: 17; --bg: green" class="rectangle"></i>
      <i style="--speed: 25; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 15; --bg: yellow" class="wavy-line"> </i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 25; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 23; --bg: pink" class="wavy-line"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 37; --bg: pink" class="wavy-line"></i>
      <i style="--speed: 36; --bg: white" class="hexagram"></i>
      <i style="--speed: 32; --bg: green" class="wavy-line"></i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 29; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 30; --bg: pink" class="rectangle"></i>
      <i style="--speed: 30; --bg: red" class="square"></i>
      <i style="--speed: 18; --bg: red" class="pentagram"></i>
      <i style="--speed: 19; --bg: green" class="rectangle"></i>
      <i style="--speed: 16; --bg: blue" class="hexagram"></i>
      <i style="--speed: 23; --bg: red" class="pentagram"></i>
      <i style="--speed: 34; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 39; --bg: pink" class="wavy-line"></i>
      <i style="--speed: 40; --bg: purple" class="square"></i>
      <i style="--speed: 21; --bg: green" class="rectangle"></i>
      <i style="--speed: 14; --bg: white" class="square"></i>
      <i style="--speed: 38; --bg: green" class="rectangle"></i>
      <i style="--speed: 19; --bg: red" class="dodecagram"></i>
      <i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 21; --bg: white" class="hexagram"></i>
      <i style="--speed: 17; --bg: purple" class="wavy-line"></i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 23; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 38; --bg: pink" class="rectangle"></i>
      <i style="--speed: 13; --bg: red" class="pentagram"></i>
      <i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 19; --bg: cyan" class="wavy-line"></i>
      <i style="--speed: 15; --bg: steelblue" class="square"></i>
      <i style="--speed: 10; --bg: yellow" class="square"></i>
      <i style="--speed: 18; --bg: white" class="pentagram"></i>
      <i style="--speed: 29; --bg: green" class="rectangle"></i>
      <i style="--speed: 17; --bg: blue" class="hexagram"></i>
      <i style="--speed: 33; --bg: red" class="pentagram"></i>
      <i style="--speed: 26; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 24; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 5; --bg: white" class="wavy-line"></i>
      <i style="--speed: 40; --bg: purple" class="square"></i>
      <i style="--speed: 17; --bg: green" class="rectangle"></i>
      <i style="--speed: 25; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 15; --bg: cyan" class="wavy-line"> </i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 45; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 37; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 26; --bg: white" class="hexagram"></i>
      <i style="--speed: 32; --bg: cyan" class="wavy-line"></i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 45; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 23; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 50; --bg: pink" class="rectangle"></i>
      <i style="--speed: 30; --bg: red" class="square"></i>
      <i style="--speed: 18; --bg: red" class="pentagram"></i>
      <i style="--speed: 19; --bg: green" class="rectangle"></i>
      <i style="--speed: 16; --bg: blue" class="hexagram"></i>
      <i style="--speed: 23; --bg: red" class="pentagram"></i>
      <i style="--speed: 33; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 39; --bg: white" class="wavy-line"></i>
      <i style="--speed: 40; --bg: orange" class="square"></i>
      <i style="--speed: 21; --bg: green" class="rectangle"></i>
      <i style="--speed: 14; --bg: white" class="square"></i>
      <i style="--speed: 38; --bg: green" class="rectangle"></i>
      <i style="--speed: 19; --bg: red" class="dodecagram"></i>
      <i style="--speed: 29; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 34; --bg: white" class="hexagram"></i>
      <i style="--speed: 17; --bg: indigo" class="wavy-line"></i>
      <i style="--speed: 32; --bg: yellow" class="pentagram"></i>
      <i style="--speed: 23; --bg: white" class="square"></i>
      <i style="--speed: 18; --bg: green" class="rectangle"></i>
      <i style="--speed: 37; --bg: red" class="dodecagram"></i>
      <i style="--speed: 48; --bg: pink" class="wavy-line"> </i>
      <i style="--speed: 38; --bg: pink" class="rectangle"></i>
      <i style="--speed: 13; --bg: red" class="pentagram"></i>
      <i style="--speed: 49; --bg: yellow" class="dodecagram"></i>
      <i style="--speed: 19; --bg: purple" class="wavy-line"></i>
      <i style="--speed: 15; --bg: cyan" class="square"></i>
    </div>
  </div>
        `;
    
        // Append the overlay to the body
        document.body.appendChild(confettiOverlay);
    
        // Set a timeout to remove the overlay after 3 seconds
        setTimeout(() => {
            confettiOverlay.remove();
        }, 3000);
    }  
   //    answer
    const userAttemptCorrectAnswer = document.getElementById("userCorrect");
    const userAttemptWrongAnswer = document.getElementById("userWrong");
    // score update info (toast msg)
    const scoreUpdateMessage = document.getElementById("score-update-message");

    collectDataButton.addEventListener("click", () =>   {

    userName = userNameInput.value;
    const phoneNumber = phoneNumberInput.value.trim();
    selectedLevel = document.getElementById("level-selector").value;
 
    selectedQuestions = questions(selectedLevel);
         
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
         setTimeout(() => {
    
        const selectedLevel = document.getElementById("level-selector").value;
        currentLevel = parseInt(selectedLevel); // Set the current level
            
        collectDataButton.textContent = "Submit";
        // connectionMessage.textContent = "";
        console.log("Starting QUIZ");
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        startQuiz();
        
        // to display this on the screen (welcome, [UserName])
        document.getElementById("user-name").textContent = userName;
    }, 1000);

   
     });


    document.addEventListener("click", async () => {
        userInteracted = true;
    });

    restartButton.addEventListener("click", async () => {
        restartButton.disabled = true
        hiringBanner.style.display = "block";
        const id  = localStorage.getItem("game-id") 
        
        scoreUpdateMessage.textContent = "Updating your score to the server ..."
   
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
    // this start button is initial page UI button.
    startButton.addEventListener("click", () => {
        buttonClickSound.play();
        
       
        hiringBanner.style.display = "none";
        
        if (!hasClickedStartButton) {

            
            startButton.style.display = "none";
            

            
            //Enabling the Input
            
            inputContainer.style.display = "none";
            inputContainer.style.display = "block";
                    // Hide the hiringBanner
                
        }
        


    });
   

  
    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) { 
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }

    function startQuiz(){    
        console.log("-----Working-----");
        console.log(`--Selected Level ---${selectedLevel}----`);
        
        shuffleArray(selectedQuestions);
        shuffleArray(selectedQuestions[currentQuestion].options);
        console.log(selectedQuestions[currentQuestion].options);
         // selectedQuestions[currentQuestion].options;
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
    let consecutiveCorrectAnswers = 0;
    function checkAnswer(selectedOption) {
        // console.log(`Selected Option: ${selectedOption}, Correct Answer: ${correctAnswer}`);
        const correctAnswer = selectedQuestions[currentQuestion].answer;
        // buttonClickSound.play();

        if (selectedOption === correctAnswer) {
            correctAnswers++;
            score++;
            playSound(true);
            consecutiveCorrectAnswers++; 
 
            console.log(`Score Incremented: ${score}`);
        }else{
            wrongAnswers++;
            if(score > 0){
                score--;
            }
            consecutiveCorrectAnswers = 0; 
            playSound(false);
            console.log(`Score Decremented: ${score}`);
        }
        if (consecutiveCorrectAnswers === 10) { // Check if user has answered 10 consecutive correct answers
            currentLevel++; // Increment the current level
            selectedQuestions = questions(currentLevel.toString()); // Fetch questions for the next level
            consecutiveCorrectAnswers = 0; // Reset consecutive correct answers count
            showConfettiOverlay();
        }
    
        currentQuestion++;
        displayQuestion();

        //Update the score display on Menu :
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.textContent = `Score: ${score}`;
    }
  
    
    // Functtion to Update the Timer .
    function updateTimer() {
        let timeLeft = parseInt(timerDisplay.textContent);

        if (timeLeft <= 0 || currentQuestion >= selectedQuestions.length) {
            clearInterval(timer);
            questionContainer.style.display = "none";
            resultDisplay.style.display = "block";
            playerInfo.innerHTML = `Time's up, ${userName} !`;
         
            
            // Completion Sound;
            if (userInteracted && !hasPlayedCompletionSound) {
                timerCompletionSound.play();
                hasPlayedCompletionSound = true;
            }

                // Calculate the number of correct and wrong answers
        const correctAnswersPercentage = Math.round((correctAnswers / selectedQuestions.length) * 100);
        const wrongAnswersPercentage = Math.round((wrongAnswers / selectedQuestions.length) * 100);
             const difference = correctAnswers - wrongAnswers;
             
             resultDisplay.innerHTML = `Your score: ${score}<br>
             Correct answers: ${correctAnswers}  ,
             Wrong answers: ${wrongAnswers}  )`;
             userAttemptCorrectAnswer.innerHTML =  `Correct Attempt: ${correctAnswers}`
             userAttemptWrongAnswer.innerHTML = ` Wrong Attempt: ${wrongAnswers}`;
 
             restartButton.style.display = "block";
            // logic is kept as 25
            if (difference > 25) {
                gameUiDisplay.innerHTML = `Wow! You did amazing!`;
 
            }else{
                gameUiDisplay.innerHTML = `Try again`;
            }
            restartButton.style.display = "block";
        
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }
    // let count_of_score_update = 0;
    function displayQuestion() {
        // if(score > 10 && count_of_score_update>0){
        //     console.log(`-Score:-${score}---`)
        //     selectedLevel++;
        //     count_of_score_update++;
        //     displayQuestion();
        // }
        // Clear options container
    optionsContainer.innerHTML = "";

        if (currentQuestion < selectedQuestions.length) {
            const questionData = selectedQuestions[currentQuestion];
            document.getElementById("question").textContent = questionData.question;
            // optionsContainer.innerHTML = "";

            questionData.options.forEach((option) => {
                const optionButton = document.createElement("button");
                optionButton.textContent = option;
                optionButton.classList.add("options-button");
                optionButton.addEventListener("click", () => checkAnswer(option, questionData.answer));
                optionsContainer.appendChild(optionButton);
            });
        } else {
            clearInterval(timer);
            questionContainer.style.display = "none";
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = `Quiz completed!`;

        // Display number of correct and wrong attempts
        resultDisplay.innerHTML += `<br>Correct attempts: ${correctAnswers}`;
        resultDisplay.innerHTML += `<br>Wrong attempts: ${wrongAnswers}`;
        
        // Update score display
        resultDisplay.innerHTML += `<br>Your score: ${score}`;

        restartButton.style.display = "block";
           
        }
    //       // Check if score is greater than 10 and current level is less than 6
    // if (score > 10 && currentLevel < 7) {
    //     currentLevel++; // Increment the current level
    //     selectedQuestions = questions(currentLevel.toString()); // Fetch questions for the next level
    //     // Update UI to reflect the change in level if necessary
    // }
    }
});

