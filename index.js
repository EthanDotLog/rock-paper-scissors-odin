//finding elements on the page
const userInputEl = document.querySelector("#user-input-el");
const userSubmitBtn = document.querySelector("#user-submit-btn");
const userWinsEl = document.querySelector("#user-wins-el");
const pcWinsEl = document.querySelector("#pc-wins-el");
const roundResponseEl = document.querySelector("#round-response-el");
const noLivesMessageEl = document.querySelector("#no-lives-message-el");
const resetBtn = document.querySelector("#reset-btn");

//buttons

userSubmitBtn.addEventListener('click', function() {
    const playerChoice = userInputEl.value.toLowerCase();
    console.log(playerChoice)
})

resetBtn.addEventListener('click', function() {

})











function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3) +1)

    if (randomNum === 1) {
        return `Rock`
    } else if (randomNum === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}


const playerSelection = "Scissors";
const computerSelection = getComputerChoice();


function playRound(playerChoice, computerChoice) {
    const player = playerChoice.toLowerCase();
    const pc = computerChoice.toLowerCase();

    if (player === 'rock') {
        if (pc === 'scissors') {
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'paper') {
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };    
    } else if (player === 'scissors') {
        if (pc === 'paper') {
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'rock') {
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };
    } else {
        if (pc === 'rock') {
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'scissors') {
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };
    };
};



function game() {

};



playRound(playerSelection, computerSelection)