
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
function getComputerChoice(numberofchoices) {
 let choice = Math.floor(Math.random() * numberofchoices);
 if (choice == 0) {
   return "Rock!";
 }
  else if (choice == 1) {
    return "Paper!";
 }
 else {
    return "Scissors!";
 } 
}

function getHumanChoice() {
    let choice = String(prompt("Choose one! Rock, Paper, or Scissors?"));
    if (choice.toLowerCase() == "rock") {
        return "Rock!"
    }
    else if (choice.toLowerCase() == "paper") {
        return "Paper!";
    }
    else if (choice.toLowerCase() == "scissors") {
        return "Scissors!"
    }
    else {
        console.log("Invalid response. Please try again.");
        getHumanChoice();
    }
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Scissors!" && computerChoice == "Scissors!") {
        console.log("It's a tie!")
    }
    else if (humanChoice == "Paper!" && computerChoice == "Paper!") {
        console.log("It's a tie!")
    }
    else if (humanChoice == "Rock!" && computerChoice == "Rock!") {
        console.log("It's a tie!")
    }
    else if (humanChoice == "Paper!" && computerChoice == "Rock!") {
        console.log("Paper beats Rock! You win!");
        humanScore = humanScore + 1;
    }
    else if (humanChoice == "Rock!" && computerChoice == "Scissors!") {
        console.log("Rock beats Scissors! You win!");
        humanScore = humanScore + 1;
    }
    else if (humanChoice == "Scissors!" && computerChoice == "Paper!") {
        console.log("Scissors beats Paper! You win!");
        humanScore = humanScore + 1;
    }
    else if (humanChoice == "Rock!" && computerChoice == "Paper!") {
        console.log("Rock loses to Paper. You lose :(");
        computerScore= computerScore + 1;
    }
     else if (humanChoice == "Paper!" && computerChoice == "Scissors!") {
        console.log("Paper loses to Scissors. You lose :(");
        computerScore= computerScore + 1;
    }
     else if (humanChoice == "Scissors!" && computerChoice == "Rock!") {
        console.log("Scissors loses to Rock. You lose :(");
        computerScore= computerScore + 1;
    }
}   
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log("The current score is:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log("The current score is:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log("The current score is:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log("The current score is:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log("The current score is:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log("I hope you had fun!");
}
    playGame();