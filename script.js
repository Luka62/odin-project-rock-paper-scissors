const buttons = document.querySelectorAll('.playerChoice');
const playerScoreText = document.querySelector('.player-score');
const playerMoveText = document.querySelector('.player-move');
const computerScoreText = document.querySelector('.computer-score');
const computerMoveText = document.querySelector('.computer-move');
const resultText = document.querySelector('.result');
const winnerText = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

//forEach button
buttons.forEach(button => 
    button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        let computerSelection = getComputerChoice();
        playerMoveText.textContent = playerSelection;
        computerMoveText.textContent = computerSelection;
        resultText.textContent = playRound(playerSelection, computerSelection);
        playerScoreText.textContent = `Player Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        winnerText.textContent = checkWinner();
    }))

//computers choice
function getComputerChoice() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

//play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')
    ) {
        playerScore++;
        return `Player wins! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection == 'ROCK')
    ) {
        computerScore++;
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

//check a winner after 5 rounds
function checkWinner() {
    if (playerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        return 'PLAYER HAS WON 5 ROUNDS! GG!';
    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        return 'COMPUTER HAS WON 5 ROUNDS! GG!'
    }
}