const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const min = 0;
    const max = (options.length)-1;
    // A Proper Random Function according to https://www.w3schools.com/JS/js_random.asp.
    let computerSelection = Math.floor(Math.random() * (max - min + 1) ) + min;
    return computerSelection;
}

function getPlayerChoice() {
    // optional: look for better way to prompt, for learning reasons.
    let playerSelection = prompt(`Select ${options[0]}, ${options[1]}, ${options[2]}`);
    playerSelection = playerSelection.toLowerCase();
    if (options.includes(playerSelection)) {
        // The array's index, instead of the word, makes math possible in the playgame() function.
        return options.indexOf(playerSelection);   
    }
    return getPlayerChoice();
}

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

// optional: improve readability / make it a function.
let rounds = prompt("How many rounds?");
let computerSelection;
let playerSelection;
for(let i = rounds; i > 0; i--) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playGame();
}

// optional: include scoreboard.