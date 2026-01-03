const rock = "rock"
const scissor = "scissor"
const paper = "paper"
const random = Math.floor(Math.random() * 3)

function getComputerChoise(random) {
    if (random === 0) {
        return paper
    } else if (random === 1) {
        return scissor
    } else if (random ===2) {
        return rock
    }  
}

const sign = window.prompt("Let the game begin: write rock, paper or scissor")

function getHumanChoise(sign){
    return sign 
}


function playRound(computerChoise, humanChoise) {
    if (computerChoise === paper && humanChoise === paper) {
        return "Tasapeli!"; 
    } else if (computerChoise === rock && humanChoise === rock) {
        return "Tasapeli!";
    } else if (computerChoise === scissor && humanChoise === scissor) {
        return "Tasapeli!;"
    } else if (computerChoise === paper && humanChoise === rock) {
        return "hävisit!";
    } else if (computerChoise === paper && humanChoise === scissor) {
        return "voitit!";
    }  else if (computerChoise === rock && humanChoise === paper) {
        return "voitit!"
    } else if (computerChoise === rock && humanChoise === scissor) {
        return "hävisit!"
    } else if (computerChoise === scissor && humanChoise === paper) {
        return "hävisit!"
    } else if (computerChoise === scissor && humanChoise === rock) {
        return "voitit!"
    }
}

const humanSelection = getHumanChoise(sign)
const computerSelection = getComputerChoise(random)

/*console.log(getComputerChoise(random))
console.log(getHumanChoise(sign))
console.log(playRound(computerSelection,humanSelection)) */

function playGame() {

    for (let i = 1; i < 6; i++)
    console.log(playRound(computerChoise,humanChoise))

}
    
console.log(playGame())

