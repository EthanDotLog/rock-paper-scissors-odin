//finding elements on the page
const userInputEl = document.querySelector("#user-input-el");
const userSubmitBtn = document.querySelector("#user-submit-btn");
const userWinsEl = document.querySelector("#user-wins-el");
const pcWinsEl = document.querySelector("#pc-wins-el");
const roundResponseEl = document.querySelector("#round-response-el");
const noLivesMessageEl = document.querySelector("#no-lives-message-el");
const resetBtn = document.querySelector("#reset-btn");
const roundCount = document.querySelector("#round-count")



//variables for data
let userChoice;
let userWins = 0;
let pcWins = 0;
let round = 0;




//buttons
//user submit checks user input for eligibility - clears the input field - starts the game
userSubmitBtn.addEventListener('click', function() {
    const playerChoice = userInputEl.value;
    if (playerChoice === 'rock' | playerChoice === 'paper' | playerChoice === 'scissors') {
        userChoice = playerChoice
        clearinput()
        game()
    } else {
        roundResponseEl.textContent = `I am sorry, ${userInputEl.value} is not an allowed choice`
        clearinput()
    }
});

//rests the game values and txt fields via a function
resetBtn.addEventListener('click', function() {
    reset()
})

//functions
//checks if you are under 5 losses, adds 1 to the round counter, prints - runs play round
function game() {
    if (pcWins >= 5) {
        noLivesMessageEl.textContent = "You cant play if you have already lost 5 rounds - Reset and try again"
    } else {
        ++round
        printResults(playRound(userChoice, getComputerChoice()))
    }
};

//gets the computer choice using a random number generator that gives 1-3 as results
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

//puts 2 variables against each other in rock paper scissors for 1 round, adds wins and losses, and returns a statement 
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
};

//prints the results, requires a input for the message el
function printResults(message) {
    userWinsEl.textContent = userWins
    pcWinsEl.textContent = pcWins
    roundResponseEl.textContent = message
    roundCount.textContent = round
};

//clears the user input field only
function clearinput() {
    userInputEl.textContent = "";
    userInputEl.value = "";
}

//resets everything
function reset() {
    userWins = 0
    pcWins = 0
    round = 0
    message = ""
    printResults(message)
}