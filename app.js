function getComputerChoice() {
    let rand_choice = Math.floor(Math.random() * 3) + 1
    return rand_choice
}

console.log(getComputerChoice())