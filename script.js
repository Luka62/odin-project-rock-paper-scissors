console.log('Hello');

//computers choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

//players choice
function getPlayerChoice() {
    const playerChoice = prompt('Rock, paper or scissors?');
    if (playerChoice == null) {
        return;
    }
    const playerChoiceInLower = playerChoice.toLowerCase();
    return playerChoiceInLower;
}

//check winner
function CheckWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
        return 'Computer';
    }
}

//play single round
function playRound(playerSelection, computerSelection){
    const result = CheckWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        return `It's a tie! ${playerSelection} vs ${computerSelection}`;
    } else if (result == 'Player') {
        return `Player wins! ${playerSelection} beats ${computerSelection}`;
    } else if (result == 'Computer') {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'Invalid Input';
    }
}

//play a 5 round game and return a result
function game() {
    console.log('Game begins');
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('================');
        if (CheckWinner(playerSelection, computerSelection) == 'Player') {
            playerScore++;
        } else if (CheckWinner(playerSelection, computerSelection) == 'Computer') {
            computerScore++;
        }
    }
    console.log('Game over')
    if (playerScore > computerScore) {
        console.log('Player has won the game!');
    } else if (playerScore < computerScore) {
        console.log('Computer has won the game!');
    } else {
        console.log('Game ended in a draw!')
    }
}
game();