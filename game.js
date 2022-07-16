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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!";
    return [0, 0];
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
    || (playerSelection === "Paper" && computerSelection === "Rock")
    || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return [1, 0];
  } else {
    results.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
    return [0, 1];
  }
}

function disableButton() {
  btn.forEach(btn => btn.disabled = true);
}

function onButtonClick(e) {
  if (scorePlayer < 5 && scoreComputer < 5) {
    let [pointPlayer, pointComputer] = playRound(playerSelection = e.target.id, computerPlay());
    scorePlayer += pointPlayer;
    scoreComputer += pointComputer;
    score.textContent = `Player ${scorePlayer} - ${scoreComputer} Computer`;
    if (scorePlayer === 5) {
      disableButton();
      results.textContent = "You win!";
    } else if (scoreComputer === 5) {
      disableButton();
      results.textContent = "The computer won!";
    }
  }
}

let playerSelection = "";
let scorePlayer = 0;
let scoreComputer = 0;

const btn = document.querySelectorAll("button");
btn.forEach(btn => btn.addEventListener("click", onButtonClick));

const container = document.querySelector(".container");
const results = document.createElement("p");
const score = document.createElement("p");
container.appendChild(results);
container.appendChild(score);