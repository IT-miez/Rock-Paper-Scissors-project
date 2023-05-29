

function playRound(playerSelection, computerSelection) {
    // your code here!

    // make all uppercase so it is case insensitive
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()


    if(playerSelection == "ROCK" || playerSelection == "SCISSORS" || playerSelection == "PAPER") {
    }
    else {
        console.log("Not a valid choice")
        return 0;
    }

    if (playerSelection == computerSelection){
        console.log("It's a tie!")
    }


    else if(playerSelection == "ROCK" && computerSelection != "SCISSORS" ) {
        console.log(computerSelection + " wins " + playerSelection + ", you lose!")
    }

    else if(playerSelection == "PAPER" && computerSelection != "ROCK") {
        console.log(computerSelection + " wins " + playerSelection + ", you lose!")
    }

    else if(playerSelection == "SCISSORS" && computerSelection != "PAPER") {
        console.log(computerSelection + " wins " + playerSelection + ", you lose!")
    }

    
    else {
        console.log(playerSelection + " wins " + computerSelection + ", you win!")
    }
    console.log(playerSelection, computerSelection)
  }
   
  

function game() {
    console.log("Welcome to play ROCK PAPER SCISSORS!")
    for(let i = 0; i < 5; i++) {
        let userInput = prompt("Make your choice: ")
        let computerInput = "ROCK"
        console.log("ROUND "+(i+1))
        playRound(userInput, computerInput)
    }
}

game()