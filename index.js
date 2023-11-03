//finding elements on the page
const userInputEl = document.querySelector("#user-input-el");
const userSubmitBtn = document.querySelector("#user-submit-btn");
const userWinsEl = document.querySelector("#user-wins-el");
const pcWinsEl = document.querySelector("#pc-wins-el");
const roundResponseEl = document.querySelector("#round-response-el");
const noLivesMessageEl = document.querySelector("#no-lives-message-el");
const resetBtn = document.querySelector("#reset-btn");



//variables for data
let userChoice;
let userWins = 0;
let pcWins = 0;




//buttons

userSubmitBtn.addEventListener('click', function() {
    const playerChoice = userInputEl.value;
    if (playerChoice === 'rock' | playerChoice === 'paper' | playerChoice === 'scissors') {
        userChoice = playerChoice
        game()
    }
});

resetBtn.addEventListener('click', function() {
    userWinsEl.textContent = 0;
    pcWinsEl.textContent = 0;
});





function game() {
    if (pcWins >= 5) {
        noLivesMessageEl.textContent = "You cant play if you have already lost 5 rounds Reset and try again"
    } else {
        printResults(playRound(userChoice, getComputerChoice()))
    }
};



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




function playRound(playerChoice, computerChoice) {
    const player = playerChoice.toLowerCase();
    const pc = computerChoice.toLowerCase();

    if (player === 'rock') {
        if (pc === 'scissors') {
            ++userWins
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'paper') {
            ++pcWins
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };    
    } else if (player === 'scissors') {
        if (pc === 'paper') {
            ++userWins
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'rock') {
            ++pcWins
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };
    } else {
        if (pc === 'rock') {
            ++userWins
            return `You Win - ${player} always beats ${pc}`
        } else if (pc === 'scissors') {
            ++pcWins
            return `You Lose - ${player} can't beat ${pc}`
        } else {
            return `You Tied - ${player} can't beat ${pc}`
        };
    };
    userInputEl.value = ""
};

function printResults(message) {
    userWinsEl.textContent = userWins
    pcWinsEl.textContent = pcWins
    roundResponseEl.textContent = message
};