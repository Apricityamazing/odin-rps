function getcomputerchoice(numberofchoices) {
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
console.log(getcomputerchoice(3));