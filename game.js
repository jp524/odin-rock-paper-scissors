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

function game() {
  // --- Previous code to play 5 rounds ---
  // let scorePlayer = 0;
  // let scoreComputer = 0;
  // for (let i = 0; i < 5; i++) {
  //   let playerSelection = capitalizeFirstLetter(prompt("Choose Rock, Paper or Scissors:"));

  //   while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
  //     console.log(`${playerSelection} is not a valid choice. Choose Rock, Paper or Scissors.`)
  //     playerSelection = capitalizeFirstLetter(prompt("Choose Rock, Paper or Scissors:"));
  //   }

  //   let [pointPlayer, pointComputer] = playRound(playerSelection, computerPlay());
  //   scorePlayer += pointPlayer;
  //   scoreComputer += pointComputer;
  // }
  // console.log(`Score player: ${scorePlayer}`);
  // console.log(`Score computer: ${scoreComputer}`);
  // console.log(scorePlayer > scoreComputer ? "Player wins!" : "Computer wins!");
}

let playerSelection = "";

const btn = document.querySelectorAll("button");
btn.forEach(btn => btn.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playRound(playerSelection, computerPlay());
}));

const container = document.querySelector(".container");
const results = document.createElement("p");

container.appendChild(results);