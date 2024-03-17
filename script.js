// Create array 
const options = ["rock", "paper", "scissors"];

// Generate computerSelection
function getComputerSelection() {
    const min = 0;
    const max = (options.length)-1;
    let computerSelection = Math.floor(Math.random() * (max - min + 1) ) + min;
    return computerSelection;
}

// Prompt playerSelection
function getPlayerSelection() {
    // optional: look for better way to prompt, for learning reasons
    let playerSelection = prompt(`Select ${options[0]}, ${options[1]}, ${options[2]}`);
    playerSelection.toLowerCase();
    // REPEAT-UNTIL PlayerSelection included in Array
    if (options.includes(playerSelection)) {
        return options.indexOf(playerSelection);   
    }
    return getPlayerSelection();
}

// Get results
function playGame() {
    if(playerSelection - computerSelection == 0) {
        alert("Draw!");
    }
    else if(playerSelection - computerSelection == 1 || playerSelection - computerSelection == -2) {
        alert(`You win, ${options[playerSelection]} beats ${options[computerSelection]}!`);
    }
    else {
        alert(`You lose, ${options[computerSelection]} beats ${options[playerSelection]}!`);
    }
}

// Prompt for rounds
let rounds = prompt("How many rounds?");
// Play the game
let computerSelection;
let playerSelection;
for(let i = rounds; i > 0; i--) {
    computerSelection = getComputerSelection();
    playerSelection = getPlayerSelection();
    playGame();
}

// optional: include scoreboard