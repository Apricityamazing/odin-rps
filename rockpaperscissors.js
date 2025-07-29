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
    let choice = window.prompt("Choose one! Rock, Paper, or Scissors?");
    if (choice == "Rock") {
        return "Rock!"
    }
    else if (choice == "Paper") {
        return "Paper!";
    }
    else if (choice == "Scissors") {
        return "Scissors"
    }
    else {
        console.log("Invalid response. Make sure to capitalize the first letter.");
        getHumanChoice();
    }
}
getHumanChoice();
