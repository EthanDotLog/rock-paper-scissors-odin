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

playRound(playerSelection, computerSelection)