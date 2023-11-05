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






let playerImgArray = [
    "./assets/face5.png",
    "./assets/face4.png",
    "./assets/face3.png",
    "./assets/face2.png",
    "./assets/face1.png"
] 
console.log(playerImgArray[0])
console.log(playerImgArray[1])
console.log(playerImgArray[2])
console.log(playerImgArray[3])
console.log(playerImgArray[4])



const displayDiv = document.createElement('div')
displayDiv.setAttribute('id', 'main-div')

const pcDiv = document.createElement('div')
pcDiv.setAttribute('class', 'card-div')

const playerDiv = document.createElement('div')
playerDiv.setAttribute('class', 'card-div')

const roundDiv = document.createElement('div')
roundDiv.setAttribute('class', 'round-div')

const pcImg = document.createElement('img')
pcImg.setAttribute('class', 'card-img')
pcImg.setAttribute('src', './assets/computer.gif')

const playerImg = document.createElement('img')
pcImg.setAttribute('class', '')









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
