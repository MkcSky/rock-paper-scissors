let humanScore = 0
let computerScore = 0
let roundCounter = 0



const getComputerChoice = function() {
    let rand_choice = Math.floor(Math.random() * 3) + 1;

    if (rand_choice === 1) {
        return "rock"
    } else if (rand_choice === 2) {
        return "paper"
    }else {
        return "scissors"
    }
}
const getHumanChoice = function(str) {
    let user_input = prompt("Please choose between --- Rock Paper Scissors")
    user_input = user_input.toLowerCase();

    return user_input
    }

const playRound = function(humanChoice, computerChoice) {
    let roundWinner = ""

    let text = `Your selection is: "${humanChoice}" and computer selection is: "${computerChoice}"`    
    console.log(text)

    if (humanChoice === "scissors" && computerChoice === "rock" ) {
        console.log("You lose! Rock beat scissors.")
        roundWinner = "computer"
    } else if (humanChoice === "rock" && computerChoice === "scissors" ) {
        console.log("You win! Rock beat scissors.")
        roundWinner = "human"
    } else if (humanChoice === "paper" && computerChoice === "scissors" ) {
        console.log("You lose! Scissors cut paper.")
        roundWinner = "computer"
    } else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        console.log("You win! Rock beat scissors.")
        roundWinner = "human"
    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        console.log("You lose! Paper wins rock.")
        roundWinner = "computer"
    } else if (humanChoice === "paper" && computerChoice === "rock" ) {
        console.log("You win! Paper wins rock.")
        roundWinner = "human"
    } else {
        console.log(`You tie "${humanChoice}" can't beat "${computerChoice}"`)
    }

    if (roundWinner === "human") {
        humanScore += 1
    } else {
        computerScore += 1
    }
    }

playRound(getHumanChoice(), getComputerChoice())

if (humanScore > computerScore) {
console.log(`Congratulations Human! You won the game... Your score is: ${humanScore}`)
} else {
console.log(`Better luck next time human...Your score is: ${humanScore}`)
}


//Adding dom
// const buttonR = document.createElement("button");
// const buttonS = document.createElement("button");
// const buttonP = document.createElement("button");

// buttonR.addEventListener("click", () =>{

// });

// const dResults = document.createElement("div")
