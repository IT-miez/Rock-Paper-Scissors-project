


resultDiv = document.getElementById("resultdiv");
restartBtn = document.getElementById("restartButton")

//rps_buttons = document.querySelectorAll(".chooseButton")
rps_buttons = document.querySelectorAll(".buttonWrapper")
let btnsArr = Array.from(rps_buttons)
console.log(btnsArr)

// COUNTERS
let gameCounter = 0
let playerWins = 0
let computerWins = 0

function playRound(playerSelection, computerSelection) {
    // your code here!
    // ADD 1 TO GAMECOUNTER
    gameCounter = gameCounter + 1
    // make all uppercase so it is case insensitive
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    let resultText;

    if(playerSelection == "ROCK" || playerSelection == "SCISSORS" || playerSelection == "PAPER") {
    }
    else {
        console.log("Not a valid choice")
        return 0;
    }

    if (playerSelection == computerSelection){
        resultText = ("It's a tie!")
        console.log(resultText)
    }


    else if(playerSelection == "ROCK" && computerSelection != "SCISSORS" ) {
        resultText = (computerSelection + " wins " + playerSelection + ", you lose!")
        computerWins = computerWins + 1 
    }

    else if(playerSelection == "PAPER" && computerSelection != "ROCK") {
        resultText = (computerSelection + " wins " + playerSelection + ", you lose!")
        computerWins = computerWins + 1 
    }

    else if(playerSelection == "SCISSORS" && computerSelection != "PAPER") {
        resultText = (computerSelection + " wins " + playerSelection + ", you lose!")
        computerWins = computerWins + 1 
    }

    
    else {
        resultText = (playerSelection + " wins " + computerSelection + ", you win!")
        playerWins = playerWins + 1 
    }

    // ADD RESULT TO SITE
    addResultDivValue("Round "+gameCounter + ": "+resultText, playerWins, computerWins)
    gameEndedCheck(gameCounter, playerWins, computerWins)


    // Player and Computer choice console.log for debugging
    //console.log(playerSelection, computerSelection)
}

  
/* OLD FUNCTION FOR THE GAME ON
    BROWSER CONSOLE
function game() {
    console.log("Welcome to play ROCK PAPER SCISSORS!")
    for(let i = 0; i < 5; i++) {
        let userInput = prompt("Make your choice: ")
        let computerInput = "ROCK"
        console.log("ROUND "+(i+1))
        playRound(userInput, computerInput)
    }
}
*/
//game()


function addResultDivValue (resultText, playerWins, computerWins) {

    
    resultDiv_base = document.getElementById("resultdiv-base")
    resultDiv = document.createElement("div")
    resultDiv.classList.add("resultdiv")
    new_p = document.createElement("p")
    new_p.textContent = resultText
    new_p.classList.add("resultText")

    /*
    second_p = document.createElement("p")
    second_p.textContent = "Status: Player "+playerWins +" - "+computerWins + " Computer"
    second_p.classList.add("resultText-status")
    */

    resultDiv.appendChild(new_p)
    //resultDiv.appendChild(second_p)
    resultDiv_base.appendChild(resultDiv)
    

    header = document.getElementById("secondary-header")
    console.log(header)
    console.log("apina")
    resultText = "Result: "+playerWins+ " - "+ computerWins
    header.textContent = resultText
}

/* OLD EVENT LISTENER FOR BUTTON 
function addEventListenerList() {
    for (let i = 0, len = btnsArr.length; i < len; i++) {
        console.log(btnsArr[i])
        btnsArr[i].addEventListener("click", () => {
            console.log("nappi")
            console.log(btnsArr[i].textContent)
            playRound(btnsArr[i].textContent, "rock")
        })
    }
}
*/

function addEventListenerForIconsList() {
    for (let i = 0, len = btnsArr.length; i < len; i++) {
        console.log(btnsArr[i])
        btnsArr[i].addEventListener("click", () => {
            console.log("icon + button")
            console.log(btnsArr[i]["children"][1].textContent)

            // RANDOMIZE COMPUTER CHOOSING
            let rps_list = ["Rock", "Paper", "Scissors"]
            computerChoice = Math.floor((Math.random() * 3))
            console.log("Computer chooses "+rps_list[computerChoice])


            playRound(btnsArr[i]["children"][1].textContent, rps_list[computerChoice])
        })
    }
}

function gameEndedCheck (gameCounter, playerWins, computerWins) {
    console.log(gameCounter, playerWins, computerWins)
    let gameOverText, endResultText;
    if(playerWins == 5) {
        gameOverText = "You won!"
        endResultText = "Result: "+playerWins+" - "+computerWins
        console.log(endResultText)
        // DISABLE BUTTONS
        for (let i = 0, len = btnsArr.length; i < len; i++) {
            console.log(btnsArr[i])
            btnsArr[i].classList.add("disabled-clicks")
        }
        

        // ADD HEADER TEXT
        header = document.getElementById("secondary-header")
        console.log(header)
        console.log("apina")
        header.textContent = endResultText
        restartBtn.classList.toggle("extended")
        alert(gameOverText)
    }
    else if (computerWins == 5) {
        gameOverText = "You lost!"
        endResultText = "Result: "+playerWins+" - "+computerWins
        for (let i = 0, len = btnsArr.length; i < len; i++) {
            console.log(btnsArr[i])
            btnsArr[i].classList.add("disabled-clicks")
        }
        
        // ADD HEADER TEXT
        header = document.getElementById("secondary-header")
        console.log(header)
        console.log("apina")
        header.textContent = endResultText
        restartBtn.classList.toggle("extended")
        alert(gameOverText)
    }

    console.log(gameCounter, playerWins, computerWins)

}

restartBtn.addEventListener("click", () => {
    location.reload()
})

addEventListenerForIconsList()