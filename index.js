const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error - invalid user input');
  }
};
// console.log(getUserChoice('FFF'));

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
  }
};
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It is a tie";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer wins!"
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer wins!"
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer wins!"
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You win!'
  }
};
// console.log(determineWinner('scissors','rock'))
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
