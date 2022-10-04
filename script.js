let userChoice; 
let computerChoice; 
let random; /*To randomize computerChoice.
This three variables are defined in playRound so that each variable gets a new
value for each round*/

function getUserChoice() {
  userChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase();
  return userChoice;
}

function getComputerChoice(random) {
  if (random === 1) {
    return `rock`;
  } else if (random === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

function playRound(userChoice, computerChoice) {
  
  userChoice = getUserChoice();
  console.log(`Player chose ${userChoice}.`);
  random = Math.floor((Math.random()* 3 ) + 1); //Added 1 to use values 1-3
  computerChoice = getComputerChoice(random);
  console.log(`Computer chose ${computerChoice}.`);

  if(userChoice === computerChoice) {
    console.log("Draw");
    return `draw`;
  } else if(userChoice === `rock` && computerChoice === `scissors`) {
    console.log("Player wins");
    return `player wins`;
  } else if(userChoice === `paper` && computerChoice === `rock`) {
    console.log("Player wins");
    return `player wins`;
  } else if(userChoice === `scissors` && computerChoice === `paper`) {
    console.log("Player wins");
    return `player wins`;
  } else {
    console.log("Computer wins");
    return `computer wins`;
  }
};

let playerCount = 0;
let computerCount = 0;
let numberOfRounds = prompt(`How many rounds?`,`5`);

function game() {
  for (let i = 0; i < numberOfRounds; i++) {
    switch (playRound(userChoice, computerChoice)) {
      case `player wins`:
        playerCount++;
        console.log(`Player count: ${playerCount}.`);
        break;
      case `computer wins`:
        computerCount++;
        console.log(`Computer count: ${computerCount}.`);
        break;
    }
  }

  if (playerCount > computerCount) {
    return `Player wins!`;
  } else if (playerCount < computerCount) {
    return `Computer wins!`;
  } else {
    return `DRAW!`;
  }
}

console.log(game());