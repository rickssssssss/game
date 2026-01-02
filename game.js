const humanscore = 0
const computerscore = 0


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

sign = window.prompt("Let the game begin: write rock, paper or scissor ");

function getHumanChoise(sign){
    return sign
}

function playRound(getComputerChoise, getHumanChoise) {
    if (getComputerChoise === paper && getHumanChoise === paper) {
        return "Tasapeli!"     
    } else if (getComputerChoise === paper && getHumanChoise === rock) {
        return "hävisit!"
    } else if (getComputerChoise === paper && getHumanChoise === scissor) {
        return "voitit!"
    }    
}

console.log(getComputerChoise(random))
console.log(getHumanChoise(sign))
console.log(playRound(random, sign))

const humanSelection = getHumanChoise()
const computerSelection = getComputerChoise()

