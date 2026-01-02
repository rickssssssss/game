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

function getHumanChoise(){
    sign =window.prompt("Let the game begin: write rock, paper or scissor ");
    return sign
}

function playRound(getComputerChoise, getHumanChoise) {
    if (getComputerChoise() === getHumanChoise())
        return "Sinä voitit!"
}

const humanSelection = getHumanChoise()
const computerSelection = getComputerChoise()

console.log(playRound)