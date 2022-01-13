const computerPlay = () => {
  const picks = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * 3);

  return picks[random];
}

const capitalize = (str = "JaVaScRiPt") => {
  let lowercaseStr = str.toLowerCase();

  let firstLetter = lowercaseStr.charAt(0);

  let capitalizedStr = lowercaseStr.replace(firstLetter, firstLetter.toUpperCase())

  return capitalizedStr;
}

const playRound = (playerSelection, computerSelection) => {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const winMessage = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  const loseMessage = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  const tieMessage = `It's a tie!`

  if (playerSelection == computerSelection) {
    return { message: tieMessage, winner: 'Tie' };
  }

  switch (computerSelection) {
    case 'rock':
      switch (playerSelection) {
        case 'paper':
          return { message: winMessage, winner: 'Player' };
        case 'scissors':
          return { message: loseMessage, winner: 'Computer' };

        default:
          break;
      }
      break;

    case 'paper':
      switch (playerSelection) {
        case 'rock':
          return { message: loseMessage, winner: 'Computer' };
        case 'scissors':
          return { message: winMessage, winner: 'Player' };

        default:
          break;
      }
      break;

    case 'scissors':
      switch (playerSelection) {
        case 'rock':
          return { message: winMessage, winner: 'Player' };
        case 'paper':
          return { message: loseMessage, winner: 'Computer' };

        default:
          break;
      }

    default:
      break;
  }
}

const game = () => {
  let gameSessionCounter = 1;
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;

  for (; gameSessionCounter <= 5;) {
    const playerInput = prompt("Select a hand to play. (Your options are: rock, paper & scissors)");
    let sessionResults = playRound(playerInput, computerPlay());

    if (sessionResults.winner == 'Player') {
      playerScore++;
    } else if (sessionResults.winner == 'Computer') {
      computerScore++;
    } else if (sessionResults.winner == 'Tie') {
      ties++;
    }

    console.log(sessionResults.message, `| You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties} | Session: ${gameSessionCounter}`);

    gameSessionCounter++;
  }

  if (playerScore > computerScore) {
    console.log("You won the match!");
  } else if (computerScore > playerScore) {
    console.log("You lost... Want to play again?");
  } else if (playerScore == computerScore) {
    console.log("It's a tie! Have a rematch and reclaim your honor!");
  }
}