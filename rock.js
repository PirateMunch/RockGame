

function computerPlays() {
    let random = Math.random();
    if (random <= 0.3333) {
        return "paper";
    } else if (random >= 0.6666) {
        return "rock";
    } else {
        return "scissors";
    }
}

let computerScore = parseInt(0);
let playerScore = parseInt(0);
let win = "You win!"
let lose = "You Lose!"
let tie = "Its a tie!"

let playerSelection;

const rockB = document.getElementById("rockButton");
    rockB.addEventListener("click", function(e) {
        console.log("rock");
        let playerSelection = "rock";
    }, playRound()
    );


const paperB = document.getElementById("paperButton");
    paperB.addEventListener("click", function (e) {
        console.log("paper")
        let playerSelection = "paper"
    }, playRound());


const siscorsB = document.getElementById("siscorsButton");
    siscorsB.addEventListener("click", function(e) {
        console.log("siscors")
        let playerSelection = "siscors"
    }, playRound());
    
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        }
        } else if (computerSelection === "rock") {
        return tie;
        } else {
        playerScore++
        return win;
        }
    
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            return win;
        } else if (computerSelection === "paper") {
            return tie;
        } else {
            computerScore++;
            return lose;
        }
    }

    if (playerSelection.toLowerCase() === "siscors") {
        if (computerSelection === "paper") {
            playerScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    }
}



//var i = 0
//const game = () => {
  //  let playerSelection = prompt("Pick rock,paper or siscors")
   // const computerSelection = computerPlays()
   // console.log(playRound(playerSelection, computerSelection))
   // console.log("your score = " + playerScore);
   // console.log("Computer's score = " + computerScore);
   // i++;
   // if (i !== 5) { 
    //    game()
    //} else {
      //  alert("Game over! Player Score :("+playerScore+") Computer Score : ("+computerScore+")");
    //}
//}
//game();
