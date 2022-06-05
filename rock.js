//Variables to use

let computerScore = 0;
let playerScore = 0;

let playerSelection;
let computerSelection;

//generate random result for computer

function computerPlays() {
    let random = Math.random();
    if (random <= 0.3333) {
        return "paper";
    } else if (random >= 0.6666) {
        return "rock";
    } else {
        return "siscors";
    }
}

// need 3 functions for buttons

function rockPlays (computerSelection) {
    computerSelection = computerPlays();
    if (computerSelection === "rock") {
        gamePrint.textContent = "rock v rock,\n it\'s a tie!" ;
    } else if (computerSelection === "paper") {
        computerScore+=1;
        computerScorePrint.textContent =`${computerScore}` ;
        gamePrint.textContent = "rock v paper,\n Computer wins!" ;
    } else {
        playerScore+=1;
        playScorePrint.textContent =`${playerScore}` ;
        gamePrint.textContent = "rock v scissors,\n You win!" ;
    } gameOver();
    return;
}

function paperPlays (computerSelection) {
    computerSelection = computerPlays();
    if (computerSelection === "paper") {
        gamePrint.textContent = "paper v paper,\n it\'s a tie!" ;
    } else if (computerSelection === "siscors") {
        computerScore+=1;
        computerScorePrint.textContent =`${computerScore}` ;
        gamePrint.textContent = "paper v scissors,\n Computer wins!" ;
    } else {
        playerScore+=1;
        playScorePrint.textContent =`${playerScore}` ;
        gamePrint.textContent = "paper v rock,\n You win!"
    } gameOver();
    return;
}

function siscorsPlays (computerSelection) {
    computerSelection = computerPlays();
    if (computerSelection === "siscors") {
        gamePrint.textContent = "scissors v scissors,\n it\'s a tie!" ;
    } else if (computerSelection === "rock") {
        computerScore+=1;
        computerScorePrint.textContent =`${computerScore}` ;
        gamePrint.textContent = "scissors v rock,\n Computer wins!" ;
    } else {
        playerScore+=1;
        playScorePrint.textContent =`${playerScore}` ;
        gamePrint.textContent = "scissors v paper,\n You win!"
    } gameOver();
    return;
}

//kill buttons and play again 
function gameOver() {
    if (playerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        siscorsButton.disabled = true;
        box1.textContent = "You win!\n Play again!";
    } if (computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        siscorsButton.disabled = true;
        box1.textContent = "Computer Wins!\n Play again!"
    }
}

function playAgain() {
    location.reload();
}


let box1 = document.querySelector('.box1');

let rockButton = document.querySelector('.rockButton');
    rockButton.addEventListener('click',rockPlays)

let paperButton = document.querySelector('.paperButton');
    paperButton.addEventListener('click',paperPlays)

let siscorsButton = document.querySelector('.siscorsButton');
    siscorsButton.addEventListener('click',siscorsPlays)

let playBtn = document.querySelector('.playBtn')
    playBtn.addEventListener('click',playAgain)

let playScorePrint = document.querySelector('.pScore');
let computerScorePrint = document.querySelector('.cScore');

let playerPrint = document.querySelector('.pText');
let computerPrint = document.querySelector('.cText');

let gamePrint = document.querySelector('.gameText')