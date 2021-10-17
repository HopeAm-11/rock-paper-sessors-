let winner = document.querySelector("#winner");
let para = document.createElement("p");
winner.appendChild(para);


function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomComputerChoice;
}

let playerSelection = "rock";
let computerSelection = computerPlay();


function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "rock") {
        computerSelection = computerPlay();

        para.innerHTML = "You picked rock computer picked rock <br>Its a Draw </br> Player score " + playerScore + "Computer Score: " + computerScore;


    } else if (playerSelection === "paper" && computerSelection === "paper") {


        para.innerHTML = "You picked paper computer picked paper <br>Its a Draw </br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {

        para.innerHTML = "You picked scissors computer picked scissors <br>Its a Draw </br> Player score " + playerScore + "Computer Score: " + computerScore;


    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;

        para.innerHTML = "You picked rock computer picked paper <br>Computer won</br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore

        para.innerHTML = "You picked rock computer picked scissors <br>Player won</br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;

        para.innerHTML = "You picked scissors computer picked rock <br>Computer won </br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore

        para.innerHTML = "You picked scissors computer picked paper <br>Player won </br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore

        para.innerHTML = "You picked paper computer picked rock <br>Player won </br> Player score " + playerScore + "Computer Score: " + computerScore;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;

        para.innerHTML = "You picked paper computer picked scissors <br>Computer won </br> Player score " + playerScore + "Computer Score: " + computerScore;

    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    if (computerScore === 5) {
        para.innerHTML = `computer won after 5 rounds ` + `Player score  ${playerScore} ` + `Computer Score 
        ${computerScore}`;
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        para.innerHTML = `player won after 5 rounds ` + `Player score  ${playerScore} ` + `Computer Score 
        ${computerScore}`;
        computerScore = 0;
        playerScore = 0;

    }
}
const rock = document.querySelector("#rock");
rock.addEventListener("click", function () {
    playRound(computerSelection, "rock")
    game();

});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function () {
    playRound(computerSelection, "paper")
    game();

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function () {
    playRound(computerSelection, "scissors");
    game();
});