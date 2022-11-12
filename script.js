let userChoice;
let playerCount = 0;
let computerCount = 0;

const container = document.querySelector(`div`);
const rock = document.querySelector("#rock");

const results = document.createElement('div');
results.classList.add(`results`);
container.insertBefore(results, rock);

const score = document.createElement('div');
container.appendChild(score);

function getComputerChoice() {
  choices = [`rock`, `paper`, `scissors`];
  index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

function playRound(userChoice) {
  console.log(`Player chose ${userChoice}.`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {    
    results.textContent = `Draw!`;
    return 'draw';
  } else if (
      userChoice === `rock` && computerChoice === `scissors` ||
      userChoice === `paper` && computerChoice === `rock` ||
      userChoice === `scissors` && computerChoice === `paper`
    ) {
    results.textContent = `Player wins!`;
    return 'player score';
  } else {
    results.textContent = `Computer wins!`;
    return 'pc score';
  };
};

function declareWinner() {
  let objectiveScore = 5;

  if (playerCount == objectiveScore) {
    container.textContent = `PLAYER WINS!!`;
    container.appendChild(resetButton);
  } else if (computerCount == objectiveScore) {
    container.textContent = `COMPUTER WINS!!`;
    container.appendChild(resetButton);
  };

  resetButton.addEventListener(`click`, reset);
};

function game() {
  let userChoice = this.id;

  let winner = playRound(userChoice);
  if (winner == `player score`) {
    ++playerCount;
  };
  if (winner == `pc score`) {
    ++computerCount;
  };

  score.textContent = `Player score is ${playerCount} and computer score is ${computerCount}.`;

  declareWinner();
};

function reset() {
  window.location.reload();
  console.log(`deberia reload`);
};
const resetButton = document.createElement(`button`);
resetButton.innerHTML = `Restart`;

const button = document.querySelectorAll(`button`);
button.forEach(button => button.addEventListener(`click`, game));