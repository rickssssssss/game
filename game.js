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



function playRound() {
    
    let computer = getComputerChoise();
    let human = getHumanChoise();

    if (computer === paper && human === paper) {
        return "Tasapeli!"; 
    } else if (computer === rock && human === rock) {
        return "Tasapeli!";
    } else if (computer === scissor && human === scissor) {
        return "Tasapeli!";
    } else if (computer === paper && human === rock) {
        return "Hävisit!";
    } else if (computer === paper && human === scissor) {
        return "Voitit!";
    }  else if (computer === rock && human === paper) {
        return "Voitit!";
    } else if  (computer === rock && human === scissor) {
        return "Hävisit!";
    } else if (computer === scissor && human === paper) {
        return "Hävisit!";
    } else if (computer === scissor && human === rock) {
        return "Voitit!";
    }
}



function playGame() {

    let humanscore = 0;
    let computerscore = 0;

        for (let i = 0; i<10; i++) {

            let round = playRound();

            if (round === "Hävisit!") {
                computerscore++
            } else if (round === "Voitit!") {
                humanscore++
            } else if (round === "Tasapeli!") {
               
            }

            if (humanscore === 5) {
                console.log("Voitit")
                break;
            } else if (computerscore === 5) {
                console.log("Hävisit")
                break;
            }

        }

        console.log(`round ${i+1}: Human - ${humanscore}, Computer - ${computerscore}`);
    } 

console.log(playGame());


