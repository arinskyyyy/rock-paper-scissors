console.log("               Welcome to Rock-Paper-Scissors!               ");

// add music to the game!
let rainMusic = document.getElementById("rainAudio");
let isMusicPlaying = false;

function startRainMusic() {
    if (!isMusicPlaying) {
        rainMusic.play();
        rainMusic.volume = 0.3;
        isMusicPlaying = true;
    }
}

// record scores
let humanScore = 0;
let computerScore = 0;

// function to get system's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

// function to play a single round
function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
    } else if (humanSelection === "rock" && computerSelection === "rock") {
        humanScore = humanScore;
        computerScore = computerScore;
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        humanScore = humanScore;
        computerScore = computerScore;
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore += 1;
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
        humanScore = humanScore;
        computerScore = computerScore;
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
    } else {
        humanScore += 1;
    }
}

let score = document.getElementById("scores");
let hidden = document.querySelector(".hidden");

// function to play the entire game
function playGame(humanSelection, computerSelection) {
    playRound(humanSelection, computerSelection);
    score.textContent = `Your Scores : ${humanScore} | Computer Scores : ${computerScore}`;
}

let translucentBox = document.querySelector(".translucent-box");
let p = translucentBox.children[1];
p.textContent = "Choose Rock, Paper, or Scissors to Play!";
translucentBox.appendChild(p);

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const quitButton = document.getElementById("quit");

rockButton.style.padding = "10px";
rockButton.style.margin = "10px";
rockButton.style.height = "40px";
rockButton.style.width = "70px";
rockButton.textContent = "Rock";
rockButton.style.fontFamily = "Pixelify Sans", "sans-serif";
rockButton.style.borderRadius = "10px";
rockButton.style.fontSize = "14px";
rockButton.addEventListener("click", () => {
    startRainMusic();
    playGame("rock", getComputerChoice());
    score.classList.remove("hidden");
});
translucentBox.appendChild(rockButton);

paperButton.style.padding = "10px";
paperButton.style.margin = "10px";
paperButton.textContent = "Paper";
paperButton.style.height = "40px";
paperButton.style.width = "70px";
paperButton.style.fontFamily = "Pixelify Sans", "sans-serif";
paperButton.style.borderRadius = "10px";
paperButton.style.fontSize = "14px";
paperButton.addEventListener("click", () => {
    startRainMusic();
    playGame("paper", getComputerChoice());
    score.classList.remove("hidden");
});
translucentBox.appendChild(paperButton);

scissorsButton.style.padding = "10px";
scissorsButton.style.margin = "10px";
scissorsButton.style.height = "40px";
scissorsButton.style.width = "80px";
scissorsButton.textContent = "Scissors";
scissorsButton.style.fontFamily = "Pixelify Sans", "sans-serif";
scissorsButton.style.borderRadius = "10px";
scissorsButton.style.fontSize = "14px";
scissorsButton.addEventListener("click", () => {
    startRainMusic();
    playGame("scissors", getComputerChoice());
    score.classList.remove("hidden");
});
translucentBox.appendChild(scissorsButton);

quitButton.style.padding = "10px";
quitButton.style.margin = "10px";
quitButton.style.height = "40px";
quitButton.style.width = "70px";
quitButton.textContent = "Quit";
quitButton.style.fontFamily = "Pixelify Sans", "sans-serif";
quitButton.style.borderRadius = "10px";
quitButton.style.fontSize = "14px";
quitButton.addEventListener("click", () => {
    startRainMusic();
    humanScore = 0;
    computerScore = 0;
    score.textContent = `Your Scores : ${humanScore} | Computer Scores : ${computerScore}`;
    setTimeout(() => {
        score.classList.add("hidden");
    }, 3000);
});

translucentBox.appendChild(quitButton);
translucentBox.appendChild(score);
translucentBox.appendChild(hidden);
