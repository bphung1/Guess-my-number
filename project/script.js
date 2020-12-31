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
let winningNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.highscore').textContent = highScore;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score > 1) {
    //if there is no input
    if (!guess) {
      displayMessage('⛔ No number');

      //guess is correct
    } else if (guess === winningNumber) {
      displayMessage('🎉 Correct Number!');

      document.querySelector('.number').textContent = winningNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.check').style.visibility = 'hidden';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      //when guess is wrong
    } else if (guess != winningNumber) {
      document.querySelector('.message').textContent =
        guess > winningNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //if score reaches 0
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = winningNumber;

    displayMessage('💥 You lost the game!');

    document.querySelector('body').style.backgroundColor = '#FF0000';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.visibility = 'hidden';
  }
});

//reset when clicking "again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  winningNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
