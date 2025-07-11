'use strict';

let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = newScore => {
  score = newScore;
  document.querySelector('.score').textContent = score;
};

const resetStyles = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const revealNumber = num => {
  document.querySelector('.number').textContent = num;
  document.querySelector('body').style.backgroundColor = 'green';
  document.querySelector('.number').style.width = '30rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🔢 No number!');
  } else if (guess === number) {
    displayMessage('🏆 You are right!');
    revealNumber(number);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈Too High' : '📉Too Low');
      updateScore(score - 1);
    } else {
      displayMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  updateScore(score);
  revealNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  resetStyles();
});
