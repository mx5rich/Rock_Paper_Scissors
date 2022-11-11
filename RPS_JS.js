


function getComputerChoice() 
{
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


const playerSelection = prompt("Pleaes choose rock, paper, or scissors: ".toLowerCase());
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection) {
        return ("Its a tie! You both picked " + playerSelection);
    } else  if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return ("You lose! " + playerSelection + " loses to " + computerSelection);
    }
}

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
