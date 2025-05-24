JavaScript

let points = 0;

function addPoints(amount) {
  points += amount;
  alert(`You gained ${amount} points! Your total is now ${points}.`);
}

addPoints(10);

addPoints(5);