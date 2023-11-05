const startEl = document.querySelector("#start-el");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const submitBtn = document.querySelector("#submit-btn");


let playerChoice;
let pcChoice;
let rounds = 0;
let playerWins = 0;
let pcWins = 0;
let displayTies = 0
let win = false;
let loss = false;
let tie = false;


rockBtn.addEventListener('click', function() {
    highlight(rockBtn)
    playerChoice = "rock"
});
paperBtn.addEventListener('click', function() {
    highlight(paperBtn)
    playerChoice = "paper"
});
scissorsBtn.addEventListener('click', function() {
    highlight(scissorsBtn)
    playerChoice = "scissors"
});
submitBtn.addEventListener('click', function() {
    highlight()
    gamestart()
});


function randomChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissors"
    };
};


function highlight(choice) {
    rockBtn.setAttribute('style', 'background-color: rgba(242, 27, 63, .5);')
    paperBtn.setAttribute('style', 'background-color: rgba(242, 27, 63, .5);')
    scissorsBtn.setAttribute('style', 'background-color: rgba(242, 27, 63, .5);')
/*     choice.setAttribute('style', 'background-color: rgba(242, 27, 63, 1);') */
    if (choice !== undefined) {
        choice.setAttribute('style', 'background-color: rgba(242, 27, 63, 1);')
    }
}


function gamestart() {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    playRound(randomChoice(), playerChoice)
    addScore()
    endRound()    
    } else (
        submitBtn.textContent = "You must make a selection"
    )
}

function endRound() {
    playerChoice = ""
    pcChoice = ""
    win = false
    loss = false
    tie = false
}

function addScore() {
    ++rounds
    if (win === true) {
        ++playerWins
    } else if (loss === true) {
        ++pcWins
    } else if (tie === true) {
        ++displayTies
    };
}

function playRound(pc, user) {
    pcChoice = pc

    if (user === "rock") {
        if (pc === "rock") {
            tie = true;
        } else if (pc === 'paper') {
            loss = true;
        } else {
            win = true;
        }
    } else if (user === "paper") {
        if (pc === "rock") {
            win = true;
        } else if (pc === 'paper') {
            tie = true;
        } else {
            loss = true;
        }
    } else if (user === "scissors") {
        if (pc === "rock") {
            loss = true;
        } else if (pc === 'paper') {
            win = true;
        } else {
            tie = true;
        }
    }

}
