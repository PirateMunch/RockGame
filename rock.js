

//generates a number from 1 - 3
    Math.random() 
    let randomNumber = Math.floor(Math.random() * 3) +1;
    

console.log(randomNumber) //test purpose

//convert randomNumber into rock,paper,siscs

let computerPlays;

if (randomNumber === 1) {
    computerPlays = "rock";
}
else if (randomNumber === 2) {
    computerPlays = "paper";
}
else {
    computerPlays = "siscors";
}

console.log(randomNumber) //test
console.log(computerPlays) //test


let playerPrompt = prompt("Please enter rock, paper or siscors: ")

console.log(playerPrompt)

let playerSelection;

if (playerPrompt === "rock") {
    let playerSelection = 1
}
else if (playerPrompt === "paper") {
    let playerSelection = 2
}
else {
    let playerSelection = 3
}

console.log(playerSelection)

