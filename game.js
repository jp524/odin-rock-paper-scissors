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