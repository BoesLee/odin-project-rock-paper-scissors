// Create array 
const options = ["rock", "paper", "scissors"];

// Generate computerSelection
function getComputerSelection() {
    const min = 0;
    const max = (options.length)-1;
    let computerSelection = options[Math.floor(Math.random() * (max - min + 1) ) + min];
    return computerSelection;
}

// Prompt playerSelection
function getPlayerSelection() {
    // optional: look for better way to prompt, for learning reasons
    let playerSelection = prompt(`Select ${options[0]}, ${options[1]}, ${options[2]}`);
    return playerSelection.toLowerCase();
}

// Get selections
    // REPEAT-UNTIL PlayerSelection included in Array
let playerSelection;
while (!options.includes(playerSelection)){
    playerSelection = getPlayerSelection();
}
    // Computer after player to avoid console-cheating
let computerSelection = getComputerSelection();


    

// Compare Selections
    // CASE PlayerSelection - computerSelection
        // IF result equals 0
            // DRAW
        
        // ELSE IF result equals 1 OR -2
            // PlayerSelection WINS

        // ELSE PlayerSelection LOSES
