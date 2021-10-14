function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomComputerChoice;
}

const computerSelection = computerPlay();
let playerSelection = "write one value: rock, paper or scissors";


function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Its draw";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Its draw";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Its draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return "player lost";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore
        return "computer lost";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return "player lost";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore
        return "computer lost";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore
        return "computer lost";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return "player lost";
    } else {
        return "input is wrong";
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    console.log(playRound(computerSelection, prompt(playerSelection)));
    console.log(playRound(computerSelection, prompt(playerSelection)));
    console.log(playRound(computerSelection, prompt(playerSelection)));
    console.log(playRound(computerSelection, prompt(playerSelection)));
    console.log(playRound(computerSelection, prompt(playerSelection)));
    if (computerScore > playerScore) {
        return "computer won yay";
    } else if (computerScore < playerScore) {
        return "player won yay";
    } else {
        return "its a draw yay";
    }

    // if computerScore > playerScore return computer won 
    // if computerScore < playerScore return player won 
    // otherwise its a draw 
}

console.log(game());