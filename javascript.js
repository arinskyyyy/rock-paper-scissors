console.log("               Welcome to Rock-Paper-Scissors!               ");

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

// function to get user's choice
function getHumanChoice() {
    let choicePopUp = parseInt(prompt("Make your choice :\n1. Rock\n2. Paper\n3. Scissors"));
    let humanChoice = "";

    if (choicePopUp === 1) {
        humanChoice = "rock";
    } else if (choicePopUp === 2) {
        humanChoice = "paper";
    } else if (choicePopUp === 3) {
        humanChoice = "scissors";}
        
    return humanChoice;
}

// function to play a single round
function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors");
    } else if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("Both tied!");
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("Both tied!");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock");
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
        console.log("Both tied!");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissors");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper");
    } else {
        console.log("Invalid choice. Round skipped.");
    }
}

// function to play the entire game
function playGame() {

    while ((humanScore + computerScore) < 5) {
        
        // variables to store the result of getHumanChoice and getComputerChoice function
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (!humanSelection) {
            console.log("Game cancelled.");
            break;
        }

        playRound(humanSelection, computerSelection);

        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore) {
        console.log("You lost! Computer Wins!");
    }
}

playGame();