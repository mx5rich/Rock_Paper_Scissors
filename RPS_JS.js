

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

let playerSelection = prompt("Please choose rock, paper, or scissors: ");  
let newPlayerSelection = playerSelection.toLowerCase(); 

let computerSelection = getComputerChoice();

function playRound(newPlayerSelection, computerSelection) {

    if (newPlayerSelection === computerSelection) {
        ++tieScore;
        return ("Its a tie! You both picked " + newPlayerSelection);
    } else if (newPlayerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return "You win! rock beats scissors";
    } else if (newPlayerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        return "You win! paper beats rock";
    } else if (newPlayerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "You win! scissors beats paper";
    } else {
        ++computerScore;
        return ("You lose! " + newPlayerSelection + " loses to " + computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt("Please choose rock, paper, or scissors: ");  
        let newPlayerSelection = playerSelection.toLowerCase(); 

        let computerSelection = getComputerChoice();

        console.log("you choose " + playerSelection.toLowerCase());

        console.log("The computer choose " + computerSelection);

        console.log(playRound(playerSelection, computerSelection)); 
    }

        console.log("Player score: " + playerScore + " ComputerScore: " + computerScore + " TieScore: " + tieScore);
        
    if (playerScore > computerScore) {
        return "You Win this game.";
    }
    if (playerScore == computerScore) {
        return "This game is a Tie.";
    }
    else {
        return "You Lose this game.";
    }
}

console.log(game());

console.log("The final score is " + playerScore + " to " + computerScore + " and this many ties " + tieScore);