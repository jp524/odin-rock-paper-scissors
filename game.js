function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function capitalizeFirstLetter(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(playerSelection);

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return [0, 0];
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
    || (playerSelection === "Paper" && computerSelection === "Rock")
    || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return [1, 0];
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return [0, 1];
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper or Scissors:");
    let [pointPlayer, pointComputer] = playRound(playerSelection, computerPlay());
    scorePlayer += pointPlayer;
    scoreComputer += pointComputer;
  }
  console.log(`Score player: ${scorePlayer}`);
  console.log(`Score computer: ${scoreComputer}`);
  console.log(scorePlayer > scoreComputer ? "Player wins!" : "Computer wins!");
}
