let userScore = 0
let compScore = 0
let you = document.querySelector("#you")
let comp = document.querySelector("#comp")
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
function resetScore() {
    userScore = 0
    you.innerText=0
    compScore = 0
    comp.innerText=0
    msg.innerText="Play Your Move"
    msg.style.backgroundColor = "#176B87";
}
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex]
}
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        msg.innerText = "You Win!!!, Your "+userChoice+" beats Computer's "+compChoice
        msg.style.backgroundColor = "green";
        userScore++;
        you.innerText = userScore

    }
    else {
        msg.innerText = "You Loose!!!, Computer's "+compChoice+" beats Your "+userChoice
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore
    }
}
const playGame = (userChoice) => {
    const compChoice = generateComputerChoice()
    if (userChoice === compChoice) {
        msg.innerText = "Draw Game"
        msg.style.backgroundColor = "grey";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true

        }
        else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false
        }
        else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice,compChoice)
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)

    })
})
