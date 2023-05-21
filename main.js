var getUserChoice = function (userInput){
    userInput = userInput.toLowerCase();{
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
            return userInput;
        } else { console.log('Error, please type rock, paper, or scissors');
    } 
}
}
var getComputerChoice = function () {
var randomNumber =(Math.floor(Math.random() * 3));{
    if (randomNumber === 0 ){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else if (randomNumber === 2){
        return 'scissors';
    }
}

};

var determineWinner = function(userChoice, computerChoice) {
if (userChoice === computerChoice){
    return 'Tie'
}
if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        return "You lost!"
    } else {
        return "You Won!"
    }
}
if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
        return "You lost!"
    } else {
        return "You Won!"
    }
}
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return "You Lost!"
    } else {
        return "You Won!"
    }
}
if (userChoice === 'bomb') {
    return "You Won!"
}

};

var playGame = function() {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
