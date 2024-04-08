const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore= 0;

function resetGame() {
    playerScore = 0;
    computerScore= 0;
    document.getElementById('score').textContent = "Press any button to play again";
}

function getComputerChoice() {
    const min = 0;
    const max = (options.length)-1;
    // A Proper Random Function, according to https://www.w3schools.com/JS/js_random.asp.
    let computerSelection = Math.floor(Math.random() * (max - min + 1) ) + min;
    return computerSelection;
}

function playGame(playerSelection) {
    let computerSelection = getComputerChoice();
    if(playerSelection - computerSelection == 0) {
        alert("Draw!");
    }
    else if(playerSelection - computerSelection == 1 || playerSelection - computerSelection == -2) {
        alert(`You win this round, ${options[playerSelection]} beats ${options[computerSelection]}!`);
        playerScore++;
    }
    else {
        alert(`You lose this round, ${options[computerSelection]} beats ${options[playerSelection]}!`);
        computerScore++;
    }
    document.getElementById('brand').textContent = `Score`;
    document.getElementById('pScore').textContent = `You: ${playerScore}`;

    document.getElementById('cScore').textContent = `Not-You: ${computerScore}`;
    document.getElementById('cScore').style.display = "inherit";
    if(playerScore == 5) {
        alert(`You win!`);
        resetGame();
    }
    else if(computerScore == 5) {
        alert(`You lose!`);
        resetGame();
    }
}
