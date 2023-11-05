const startEl = document.querySelector("#start-el");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const submitBtn = document.querySelector("#submit-btn");
const submitBtnTxt = document.querySelector("#submit-btn-txt");

let playerChoice;
let pcChoice;
let rounds = 0;
let playerWins = 0;
let pcWins = 0;
let displayTies = 0
let win = false;
let loss = false;
let tie = false;
let playerImgArray = [
    "./assets/face5.png",
    "./assets/face4.png",
    "./assets/face3.png",
    "./assets/face2.png",
    "./assets/face1.png",
    "./assets/face1.png"
]



rockBtn.addEventListener('click', function() {
    highlight(rockBtn)
    playerChoice = "rock"
    printSelected()
});

paperBtn.addEventListener('click', function() {
    highlight(paperBtn)
    playerChoice = "paper"
    printSelected()
});

scissorsBtn.addEventListener('click', function() {
    highlight(scissorsBtn)
    playerChoice = "scissors"
    printSelected()
});

submitBtn.addEventListener('click', function() {
    highlight()
    gamestart()
});



function printSelected() {
    submitBtnTxt.textContent = playerChoice
}

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
    pcImg.setAttribute('src', playerImgArray[pcWins])
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




const displayDiv = document.createElement('div')
displayDiv.setAttribute('id', 'main-div')



const pcDiv = document.createElement('div')
pcDiv.setAttribute('class', 'card-div')

const pcImg = document.createElement('img')
pcImg.setAttribute('class', 'card-img')
pcImg.setAttribute('src', './assets/computer.gif')

const pcInfoContainer = document.createElement('div')
pcInfoContainer.setAttribute('class', 'info-container')

const pcInfoName = document.createElement('h2')
pcInfoName.textContent = "Master Computer"
pcInfoName.setAttribute('class', 'info-name')

const pcInfoChoice = document.createElement('h3')
pcInfoChoice.textContent = `Choice of weapon ${pcChoice}`
pcInfoChoice.setAttribute('class', 'info-choice')

const pcInfoWins = document.createElement('h3')
pcInfoWins.textContent = `Wins: ${pcWins} Loss: ${playerWins}`
pcInfoWins.setAttribute('info-wins')



const roundDiv = document.createElement('div')
roundDiv.setAttribute('class', 'round-div')

const roundTopDiv = document.createElement('div')

const roundTopText = document.createElement('h2')
roundTopText.textContent = "Round"
roundTopText.setAttribute('class', 'center-txt')
const roundTopNumText = document.createElement('h3')
roundTopNumText.textContent = rounds
roundTopNumText.setAttribute('id', 'round-num')

const roundBottomDiv = document.createElement('div')

const roundBottomLeftDiv = document.createElement('div')
roundBottomLeftDiv.setAttribute('id', 'center-w')
roundBottomLeftDiv.setAttribute('class', 'w-l-box')
roundBottomLeftDiv.textContent = "w"
const roundBottomRightDiv = document.createElement('div')
roundBottomRightDiv.setAttribute('id', 'center-l')
roundBottomRightDiv.setAttribute('class', 'w-l-box')
roundBottomRightDiv.textContent = "L"



const playerDiv = document.createElement('div')
playerDiv.setAttribute('class', 'card-div')

const playerImg = document.createElement('img')
pcImg.setAttribute('class', 'card-img')
pcImg.setAttribute('src', playerImgArray[pcWins])

const playerInfoContainer = document.createElement('div')
playerInfoContainer.setAttribute('class', 'info-container')

const playerInfoName = document.createElement('h2')
playerInfoName.textContent = 'user'
playerInfoName.setAttribute('class', 'info-name')

const playerInfoChoice = document.createElement('h3')
playerInfoChoice.textContent = `Choice of weapon ${playerChoice}`
playerInfoChoice.setAttribute('class', 'info-choice')

const playerInfoWins = document.createElement('h3')
playerInfoWins.textContent = `Wins: ${playerWins} Loss: ${pcWins}`
playerInfoWins.setAttribute('info-wins')
