'use strict';

/*
console.log(document.querySelector('.message').textContent);

// setting content
document.querySelector('.message').textContent = 'Correct Number! 🎉';

console.log(
  (document.querySelector('.message').textContent = 'Correct Number! 🎉')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const winningNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number';
    } else if (guess === winningNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      document.querySelector('.number').textContent = winningNumber;
    } else if (guess > winningNumber) {
      document.querySelector('.message').textContent = 'Too high!';

      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < winningNumber) {
      document.querySelector('.message').textContent = 'Too low!';

      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }
});
