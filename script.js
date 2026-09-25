// 0 se muestra un mensaje pidiendo: piedra, papel o tijeras
// 1 se recibe la respuesta del usuario
function getHumanChoice() {
    let humanChoice = prompt("Ingresa tu opción: ").toLowerCase();
    return humanChoice
}



// 2  la computadora elije entre: piedra, papel o tijeras
function getComputerChoice() {
    const option = randomChoice = Math.floor(Math.random() * 3);
    let choice;
    if (option === 0) {
        choice = "rock";
    } else if (option === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
}



// -- score variable
let humanScore = 0;
let computerScore = 0;


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playGame(humanChoice, computerChoice) {
    // 3 se comparan la opcion de la pc y del usuario
    while (computerScore + humanScore < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
            } else {
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1;
            } else {
                humanScore += 1;
            }
        } else { //scissors
            if (computerChoice === "rock") {
                computerScore += 1;
            } else {
                humanChoice += 1;
            }
            
        }
    }
    if (humanScore > computerScore) {
        console.log(`The human wins with ${humanScore} points`);
    } else {
        console.log(`The computer wins with ${computerScore} points`);
    }
}   


playGame();
