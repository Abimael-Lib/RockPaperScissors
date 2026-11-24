// botones de accion
const piedra = document.createElement("button");
const papel = document.createElement("button");
const tijera = document.createElement("button");

// div para mostrar información
const informacion = document.createElement("div");
informacion.style.backgroundColor = "gray";
informacion.style.width = "200px";
informacion.style.height = "200px";

const humanScoreP = document.createElement("p");
const computerScoreP = document.createElement("p");
const ganadorP = document.createElement("p");



informacion.append(humanScoreP, computerScoreP, ganadorP);


// nombres para identificar
piedra.textContent = "Piedra";
papel.textContent = "Papel";
tijera.textContent = "Tijera";

piedra.addEventListener("click", humanChoiceRock);
papel.addEventListener("click", humanChoicePaper);
tijera.addEventListener("click", humanChoiceScissors);

let humanChoice = "";

function humanChoiceRock(params) {
    humanChoice = "rock";    
    playGame();
}

function humanChoicePaper(params) {
    humanChoice = "papaer";    
    playGame();
}

function humanChoiceScissors(params) {
    humanChoice = "scissors";    
    playGame();
}



// unir los elementos para mostrarlos

document.body.append(piedra, papel, tijera);


document.body.appendChild(informacion);



// 0 se muestra un mensaje pidiendo: piedra, papel o tijeras
// 1 se recibe la respuesta del usuario




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

    return choice
}



// -- score variable
let humanScore = 0;
let computerScore = 0;
let ganador = "";

function getHumanScore(params) {
    return humanScore
}

function getComputerScore(params) {
    return computerScore
}

function getGanador(params) {
    return ganador
}




const computerChoice = getComputerChoice();


function playGame(humanChoice, computerChoice) {
    // 3 se comparan la opcion de la pc y del usuario 
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
            humanScore += 1;
        }
        
        if (humanScore === 5) {
            ganador = "Ganaste";
        } else if (computerScore === 5) {
            ganador = "Gano la computadora";
        }
        
    }    
    ganadorP.textContent = getGanador();
    humanScoreP.textContent = getHumanScore();
    computerScoreP.textContent = getComputerScore();
}
if (humanScore > computerScore) {
    console.log(`The human wins with ${humanScore} points`);
} else {
    console.log(`The computer wins with ${computerScore} points`);
}

