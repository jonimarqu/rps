// Ask the user for a choice input

let userChoice = (prompt(`Rock, Paper or Scissors?`)).toLowerCase();
console.log(`You choose ${userChoice}.`);

// Ask the computer for a choice input

let random = Math.floor((Math.random()* 3 ) + 1);

function getComputerChoice(random) {
    if (random === 1) {
        return `rock`;
    } else if (random === 2) {
        return `paper`;
    } else {
        return `scissors`;
    }
};

let computerChoice = getComputerChoice(random);
console.log(`Computer choose ${computerChoice}.`);


function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      //  console.log(`It's a draw.`);
        return `draw`;
    } else if(userChoice === `rock` && computerChoice === `scissors`) {
      //  console.log(`Player wins`);
        return `player wins`;
    } else if(userChoice === `paper` && computerChoice === `rock`) {
      //  console.log(`Player wins`);
        return `player wins`;
    } else if(userChoice === `scissors` && computerChoice === `paper`) {
      //  console.log(`Player wins`);
        return `player wins`;
    } else {
      //  console.log(`Computer wins`);
        return `computer wins`;
    }
};


let gameOn = playRound(userChoice, computerChoice);
console.log(gameOn);