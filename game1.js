let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `It's a tie! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  }
}

function displayScores() {
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

function randomQuestion(){
  let ask = ["Dont make this harder","Please", "Come on, it's not rocket science", "Don't be shy", "Vamos", "It's easy", "You know how to play this game", "It's now or never", "Were you really gonna choose paper? Come on", "Dont choose paper", "合格"];
  let randomIndex = Math.floor(Math.random() * ask.length);

  return ask[randomIndex];
}

function getUserPrompt(){
  let userChoice = prompt(randomQuestion()+", choose: rock, paper, or scissors");
  while (userChoice == null) {
    alert("Leaving is not an option");
    userChoice = prompt(randomQuestion()+", choose: rock, paper, or scissors");
  }

  userChoice = userChoice.toLowerCase();

  let validChoices = ["rock", "paper", "scissors"]; 

  if (validChoices.includes(userChoice)){
    return userChoice; 
  } else { 
    alert("Invalid choice. Please try again."); 
    return getUserPrompt(); 
  }
}

function game() {
  for (let round = 1; round <= 5; round++) {
    const playerSelection = getUserPrompt();
    const computerSelection = computerChoice();
    const resultMessage = playRound(playerSelection, computerSelection);
    
    console.log(`Round ${round}: ${resultMessage}`);
    displayScores();
  }
  
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game. Better luck next time!");
  } else {
    console.log("It's a tie. The game ends in a draw.");
  }
}

game();