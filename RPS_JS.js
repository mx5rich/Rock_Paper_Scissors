function getComputerChoice(choices) 
{
    return choices[Math.floor(Math.random()*choices.length)];
}

var choices = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(choices));