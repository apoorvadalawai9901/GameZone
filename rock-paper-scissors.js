const options = ["Rock", "Paper", "Scissors"];

const playerText = document.getElementById('player');
const computerText = document.getElementById('computer');
const resultText = document.getElementById('result');

const buttons = [
  document.getElementById('rock'),
  document.getElementById('paper'),
  document.getElementById('scissors'),
];
const resetButton = document.getElementById('reset');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent;
    playRound(playerChoice);
  });
});

resetButton.addEventListener('click', resetGame);

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  playerText.textContent = `Your choice: ${playerChoice}`;
  computerText.textContent = `Computer choice: ${computerChoice}`;
  resultText.textContent = `Result: ${result}`;
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    return 'You win!';
  }

  return 'Computer wins!';
}

function resetGame() {
  playerText.textContent = 'Your choice: -';
  computerText.textContent = 'Computer choice: -';
  resultText.textContent = 'Result: -';
}
