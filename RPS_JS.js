

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


let playerSelection = prompt("Please choose rock, paper, or scissors: ");
let newPlayerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

function playRound(newPlayerSelection, computerSelection) {
    if (newPlayerSelection === computerSelection) {
        return ("Its a tie! You both picked " + newPlayerSelection);
    } else if (newPlayerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors";
    } else if (newPlayerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock";
    } else if (newPlayerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper";
    } else {
        return ("You lose! " + newPlayerSelection + " loses to " + computerSelection);
    }
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game() {
    let roundResult = playRound();
    for (let i = 0; i < 4; i++) { //what is going to be loop
        playerSelection = prompt("lets play rock papper scissors");

        console.log("you choose " + playerSelection.toLowerCase());

        console.log("The computer choose " + computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        playRound();

        if (roundResult === 'You win! rock beats scissors' || 'You win! paper beats rock' || 'You win! scissors beats paper') {
            ++playerScore;
        } else if (roundResult === 'You lose! rock loses to paper' || 'You lose! paper loses to scissors' || 'You lose! scissors loses to rock') {
            ++computerScore;
        } else {
            ++tieScore;
        }
    }
    if (playerScore > computerScore) {
        return "You Win this game.\n -------";
    }
    if (playerScore == computerScore) {
        return "This game is a tie.\n -------";
    }
    else {
        return "You Lose this game.\n -------";
    }
}

console.log(game());

console.log("The final score is " + playerScore + " to " + computerScore + " and this many ties " + tieScore);