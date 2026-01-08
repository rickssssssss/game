    let rock = "rock"
    let scissor = "scissor"
    let paper = "paper"

 function getComputerChoise() {
    let random = Math.floor(Math.random() * 3)

    if (random === 0) {
        return paper;
    } else if (random === 1) {
        return scissor;
    } else if (random ===2) {
        return rock;
    }  

}

// console.log(computer())

function getHumanChoise(){
    let sign = window.prompt("Let the game begin: write rock, paper or scissor")
    return sign   
}

//console.log(human())

function playRound() {
    
    if (getComputerChoise() === paper && getHumanChoise() === paper) {
        return "Tasapeli!"; 
    } else if (getComputerChoise() === rock && getHumanChoise() === rock) {
        return "Tasapeli!";
    } else if (getComputerChoise() === scissor && getHumanChoise() === scissor) {
        return "Tasapeli!";
    } else if (getComputerChoise() === paper && getHumanChoise() === rock) {
        return "Hävisit!";
    } else if (getComputerChoise() === paper && getHumanChoise() === scissor) {
        return "Voitit!";
    }  else if (getComputerChoise() === rock && getHumanChoise() === paper) {
        return "Voitit!";
    } else if (getComputerChoise() === rock && getHumanChoise() === scissor) {
        return "Hävisit!";
    } else if (getComputerChoise() === scissor && getHumanChoise() === paper) {
        return "Hävisit!";
    } else if (getComputerChoise() === scissor && getHumanChoise() === rock) {
        return "Voitit!";
    }
}

playRound()

 //oneround(console.log())

/* let game = function playGame() {

    let humanscore = 0;
    let computerscore = 0;
    let i = 0;

    if (humanscore < 5 || computerscore < 5) {
        for (let i = 0; i<5; i++) {
                if (oneround() === "Voitit") {
                humanscore = humanscore + 1;
                console.log(humanscore)
                } else if (oneround() === "Hävisit") {
                computerscore = computerscore + 1;
                console.log(computerscore)
                } 
        } 
    } else {
        alert("moi")
    }

}
*/
