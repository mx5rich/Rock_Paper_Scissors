

function getComputerChoice() 
{
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


const playerSelection = prompt("Please choose rock, paper, or scissors: ");
const computerSelection = getComputerChoice();
const newPlayerSelection = playerSelection.toLowerCase();

function playRound(newPlayerSelection, computerSelection)
{
    if (newPlayerSelection === computerSelection) {
        return ("Its a tie! You both picked " + newPlayerSelection);
    } else  if (newPlayerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors";
    } else if (newPlayerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock";
    } else if (newPlayerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper";
    } else {
        return ("You lose! " + newPlayerSelection + " loses to " + computerSelection);
    }
}

console.log(computerSelection);
console.log(playRound(newPlayerSelection, computerSelection));
