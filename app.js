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

console.log(getComputerChoice())

const getHumanChoice = function(str) {
    let user_input = prompt("Please choose between --- Rock Paper Scissors")
    user_input = user_input.toLowerCase();

    return user_input
}

