/* Variables */

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const tiesEl = document.getElementById("ties");
const gameSessionsEl = document.getElementById("game-sessions");

const gameMessage = document.getElementById("game-message");
const endGameMessage = document.getElementById("end-game-message");
const gameOver = document.getElementById("game-over");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameSessionCounter = 1;


/* Event Listeners */
rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
resetBtn.addEventListener('click', reset);


/* Functions */

function computerPlay() {
  const picks = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * 3);

  console.log(picks[random]);
  return picks[random];
}

function capitalize(str = "JaVaScRiPt") {
  let lowercaseStr = str.toLowerCase();

  let firstLetter = lowercaseStr.charAt(0);

  let capitalizedStr = lowercaseStr.replace(firstLetter, firstLetter.toUpperCase())

  console.log(capitalizedStr);
  return capitalizedStr;
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const winMessage = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  const loseMessage = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  const tieMessage = `It's a tie!`

  if (playerSelection == computerSelection) {
    console.log({ message: tieMessage, winner: 'Tie' });
    return { message: tieMessage, winner: 'Tie' };
  }

  switch (computerSelection) {
    case 'rock':
      switch (playerSelection) {
        case 'paper':
          console.log({ message: winMessage, winner: 'Player' });
          return { message: winMessage, winner: 'Player' };
        case 'scissors':
          console.log({ message: loseMessage, winner: 'Computer' });
          return { message: loseMessage, winner: 'Computer' };

        default:
          break;
      }
      break;

    case 'paper':
      switch (playerSelection) {
        case 'rock':
          console.log({ message: loseMessage, winner: 'Computer' });
          return { message: loseMessage, winner: 'Computer' };
        case 'scissors':
          console.log({ message: winMessage, winner: 'Player' });
          return { message: winMessage, winner: 'Player' };

        default:
          break;
      }
      break;

    case 'scissors':
      switch (playerSelection) {
        case 'rock':
          console.log({ message: winMessage, winner: 'Player' });
          return { message: winMessage, winner: 'Player' };
        case 'paper':
          console.log({ message: loseMessage, winner: 'Computer' });
          return { message: loseMessage, winner: 'Computer' };

        default:
          break;
      }

    default:
      break;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  gameSessionCounter = 1;

  gameMessage.innerText = '';
  playerScoreEl.innerText = '';
  computerScoreEl.innerText = '';
  tiesEl.innerText = '';
  gameSessionsEl.innerText = '';
  endGameMessage.innerText = '';

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

  console.clear();

  gameOver.classList.toggle("no-show");
  gameOver.classList.toggle("game-over-screen");
}

function disableBtns() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function game(e) {
  const playerInput = e.target.id;

  let sessionResults = playRound(playerInput, computerPlay());

  if (sessionResults.winner == 'Player') {
    playerScore++;
  } else if (sessionResults.winner == 'Computer') {
    computerScore++;
  } else if (sessionResults.winner == 'Tie') {
    ties++;
  }

  gameMessage.innerText = sessionResults.message;
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
  tiesEl.innerText = ties;
  gameSessionsEl.innerText = gameSessionCounter;

  console.log(sessionResults.message, `| You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties} | Sessions: ${gameSessionCounter}`);

  if (playerScore === 5 || computerScore === 5) {
    gameOver.classList.toggle("no-show");
    gameOver.classList.toggle("game-over-screen");
    disableBtns();
    if (playerScore > computerScore) {
      console.log("You won the match!");
      endGameMessage.innerText = "You won the match!";
    } else if (computerScore > playerScore) {
      console.log("You lost... Want to play again?");
      endGameMessage.innerText = "You lost... Want to play again?";
    } else if (playerScore == computerScore) {
      console.log("It's a tie! Have a rematch and reclaim your honor!");
      endGameMessage.innerText = "It's a tie! Have a rematch and reclaim your honor!";
    }
  }

  gameSessionCounter++;
}
