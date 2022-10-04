// Ask the user for a choice input

let userChoice;

function getUserChoice() {
  userChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase();
  console.log(`Player chose ${userChoice}.`)
  return userChoice;
}

// Ask the computer for a choice input

let random;

function getComputerChoice(random) {
  if (random === 1) {
    return `rock`;
  } else if (random === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

let computerChoice;

function playRound(userChoice, computerChoice) {
  
  userChoice = getUserChoice();
  random = Math.floor((Math.random()* 3 ) + 1);
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

function game() {
  for (let i = 0; i < 5; i++) {
    switch (playRound(userChoice, computerChoice)) {
      case `player wins`:
        playerCount++;
        console.log(playerCount);
        break;
      case `computer wins`:
        computerCount++;
        console.log(computerCount);
        break;
    }
  }



 /*   if (playRound(userChoice, computerChoice) === `player wins`) {
      playerCount++;
      console.log(`Player counter is ${playerCount}.`);
    } else if (playRound(userChoice, computerChoice) === `computer wins`) {
      computerCount++;
      console.log(`Computer counter is ${computerCount}.`);
    };
  } */ 


  if (playerCount > computerCount) {
    return `Player wins!`;
  } else if (playerCount < computerCount) {
    return `Computer wins!`;
  } else {
    return `DRAW!`;
  }
}

console.log(game());