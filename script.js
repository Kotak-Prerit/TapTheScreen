const body = document.body;
const player1 = document.querySelector(".firstPlayer");
const player2 = document.querySelector(".secondPlayer");
const playerOneScore = document.getElementById("score1");
const playerTwoScore = document.getElementById("score2");
const finalScoreOne = document.getElementById("get1");
const finalScoreTwo = document.getElementById("get2");
const timer1 = document.querySelector(".timer1");
const timer2 = document.querySelector(".timer2");
const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");
const slider = document.querySelector(".slider");
const toggler = document.querySelector(".toggler");
const mode = document.querySelector(".mode");
const total1 = document.querySelector(".total1");
const total2 = document.querySelector(".total2");

slider.onclick = function () {
    body.classList.toggle('bodydark');
    player1.classList.toggle("firstPlayerDark");
    player2.classList.toggle("secondPlayerDark");
    slider.classList.toggle("sliderdark");
    toggler.classList.toggle("togglerdark");
    mode.classList.toggle("modedark");
    timer1.classList.toggle("timerdark");
    timer2.classList.toggle("timerdark");
    startBtn.classList.toggle("buttondark");
    restartBtn.classList.toggle("buttondark");
};

let gameActive = false; // Initialize to false
let score1 = 0;
let score2 = 0;
let clock;

function startTimer(time) {
    clearInterval(clock); // Clear any existing timers
    clock = setInterval(countdown, 1000);

    function countdown() {
        timer1.textContent = `00:${formatTime(time)}`;
        timer2.textContent = `00:${formatTime(time)}`;
        time--;
        if (time < 0) {
            clearInterval(clock);
            timer1.textContent = "00";
            timer2.textContent = "00";
            endGame1();
            endGame2();
        }
    }
}

function formatTime(seconds) {
    return seconds < 10 ? `0${seconds}` : seconds;
}

restartBtn.onclick = function () {
    // // Reset styles and text content
    // playerOneScore.style.opacity = 0;
    // playerTwoScore.style.opacity = 0;
    // total1.style.opacity = 0;
    // total2.style.opacity = 0;
    gameActive = false; // Set to false
    score1 = 0;
    score2 = 0;
    finalScoreOne.textContent = "";
    finalScoreTwo.textContent = "";
    player1.style.backgroundColor = "#cccccc";
    player2.style.backgroundColor = "#cccccc";
    playerTwoScore.textContent = "Tap";
    playerOneScore.textContent = "Tap";
};

startBtn.onclick = function () {
    startTimer(29); // Change the timer length

    // Show scores and total
    playerOneScore.style.opacity = 100;
    playerTwoScore.style.opacity = 100;
    total1.style.opacity = 100;
    total2.style.opacity = 100;

    // Reset background colors and text content
    player1.style.backgroundColor = "#cccccc";
    player2.style.backgroundColor = "#cccccc";
    playerTwoScore.textContent = "Tap";
    playerOneScore.textContent = "Tap";

    gameActive = true; // Set to true

    // Set a timeout for game end
    setTimeout(() => {
        endGame1();
        endGame2();
    }, 30000);

    function endGame1() {
        gameActive = false;
    }

    function endGame2() {
        gameActive = false;
        if (score1 > score2) {
            player1.style.backgroundColor = "#18ff18";
            playerTwoScore.textContent = "You Lose 😞";
            playerOneScore.textContent = "Winner 🏆";
        } else if (score2 > score1) {
            player2.style.backgroundColor = "#18ff18";
            playerOneScore.textContent = "You Lose 😞";
            playerTwoScore.textContent = "Winner 🏆";
        } else if (score2 === score1) {
            playerOneScore.textContent = "Draw 🤝🏻";
            playerTwoScore.textContent = "Draw 🤝🏻";
        } else {
            playerOneScore.textContent = "Don't mess with the Game 😠";
            playerTwoScore.textContent = "Don't mess with the Game 😠";
        }
    }

    player1.addEventListener("click", () => {
        if (gameActive) {
            score1++;
            updateScore(playerOneScore, finalScoreOne, score1);
        }
    });

    player2.addEventListener("click", () => {
        if (gameActive) {
            score2++;
            updateScore(playerTwoScore, finalScoreTwo, score2);
        }
    });
};

function updateScore(scoreElement, finalScoreElement, currentScore) {
    scoreElement.textContent = `${currentScore}`;
    finalScoreElement.textContent = currentScore;
}




// const body = document.body;
// const heading = document.querySelector(".h1");
// const gameContainer = document.getElementById("gameContainer");
// const player1 = document.querySelector(".firstPlayer");
// const player2 = document.querySelector(".secondPlayer");
// const playerOneScore = document.getElementById("score1");
// const playerTwoScore = document.getElementById("score2");
// const finalScoreOne = document.getElementById("get1");
// const finalScoreTwo = document.getElementById("get2");
// const timer1 = document.querySelector(".timer1");
// const timer2 = document.querySelector(".timer2");
// const startBtn = document.querySelector(".start");
// const restartBtn = document.querySelector(".restart");
// const slider = document.querySelector(".slider");
// const toggler = document.querySelector(".toggler");
// const mode = document.querySelector(".mode");
// const total1 = document.querySelector(".total1");
// const total2 = document.querySelector(".total2");

// slider.onclick = function () {
//     body.classList.toggle('bodydark');
//     heading.classList.toggle('h1dark');
//     player1.classList.toggle("firstPlayerDark");
//     player2.classList.toggle("secondPlayerDark");
//     slider.classList.toggle("sliderdark");
//     toggler.classList.toggle("togglerdark");
//     mode.classList.toggle("modedark");
//     timer1.classList.toggle("timerdark");
//     timer2.classList.toggle("timerdark");
//     startBtn.classList.toggle("buttondark");
//     restartBtn.classList.toggle("buttondark");
// }
// let gameActive = true;
// let score1 = 0;
// let score2 = 0;

// function startTimer(time) {
//     clock = setInterval(countdown, 1000);
//     function countdown() {
//         timer1.textContent = `00:${time}`;
//         timer2.textContent = `00:${time}`;
//         time--;
//         if (time < 0) {
//             clearInterval(clock);
//             timer1.textContent = "00";
//             timer2.textContent = "00";
//         }
//     }
// }

// restartBtn.onclick = function () {
//     playerOneScore.style.opacity = 0;
//     playerTwoScore.style.opacity = 0;
//     total1.style.opacity = 0;
//     total2.style.opacity = 0;
//     gameActive = true;
//     score1 = 0;
//     score2 = 0;
//     finalScoreOne.textContent = " ";
//     finalScoreTwo.textContent = " ";
//     player1.style.background = "#cccccc";
//     player2.style.background = "#cccccc";
//     playerTwoScore.textContent = "Tap"
//     playerOneScore.textContent = "Tap"
// }

// startBtn.onclick = function () {
//     startTimer(9);

//     playerOneScore.style.opacity = 100;
//     playerTwoScore.style.opacity = 100;

//     total1.style.opacity = 100;
//     total2.style.opacity = 100;

//     setTimeout(() => {
//         endGame1();
//         endGame2();
//     }, 10000);

//     function endGame1() {
//         gameActive = false;
//     }

//     function endGame2() {
//         gameActive = false;
//         if (Number(finalScoreOne.textContent) > Number(finalScoreTwo.textContent)) {
//             player1.style.background = "#18ff18";
//             playerTwoScore.textContent = "You Lose 😞";
//             playerOneScore.textContent = "Winner 🏆";
//         } else if (Number(finalScoreTwo.textContent) > Number(finalScoreOne.textContent)) {
//             player2.style.background = "#18ff18";
//             playerOneScore.textContent = "You Lose 😞";
//             playerTwoScore.textContent = "Winner 🏆";
//         } else if (Number(finalScoreTwo.textContent) === Number(finalScoreOne.textContent)) {
//             playerOneScore.textContent = "Draw 🤝🏻";
//             playerTwoScore.textContent = "Draw 🤝🏻";
//         } else {
//             playerOneScore.textContent = "Don't mess with the Game 😠";
//             playerTwoScore.textContent = "Don't mess with the Game 😠";
//         }
//     }

//     player1.addEventListener("click", () => {
//         if (gameActive) {
//             score1++;
//             updateScore();
//         }

//         function updateScore() {
//             playerOneScore.textContent = score1;
//             finalScoreOne.textContent = score1;
//         }

//     })

//     player2.addEventListener("click", () => {
//         if (gameActive) {
//             score2++;
//             updateScore();
//         }

//         function updateScore() {
//             playerTwoScore.textContent = score2;
//             finalScoreTwo.textContent = score2;
//         }
//     })


// }