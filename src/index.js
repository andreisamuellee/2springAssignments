let lowestNum = 1;
let highestNum = 100;

let randomNumber = Math.floor(Math.random() * highestNum) + lowestNum;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;
let maxGuessCount = 10;
let startTime;
let endTime;

const info = document.querySelector('.info');
const text = document.createTextNode("We have selected a random number between " + lowestNum + " and " + highestNum + ". See if you can guess it in " + maxGuessCount + " turns or fewer. We'll tell you if your guess was too high or too low.");
info.appendChild(text);

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    startTime = Date.now();
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    endTime = Date.now();
    lastResult.textContent = 'Congratulations! You got it right! Your time: ' + ((endTime - startTime) / 1000) + ' seconds';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === maxGuessCount) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * highestNum) + lowestNum;
}



const play = () => {
  let firstGuess = highestNum / 2;
  let lastGuess = firstGuess;
  let lowest = lowestNum;
  let highest = highestNum;
  let guess = 10;
  let win = false;
  guessField.value = firstGuess;
  guessSubmit.click();
  let guessNum = 0;
  while (!win) {
    if (lowOrHi.innerText === 'Last guess was too low!') {
      console.log('low');
      guess = Math.round((lastGuess + highest) / 2);
      guessField.value = guess;
      lowest = lastGuess;
      lastGuess = guess;
      guessSubmit.click();
      guessNum++;
    }
    else if (lowOrHi.innerText === 'Last guess was too high!') {
      console.log('hi');
      guess = Math.round((lastGuess + lowest) / 2);
      guessField.value = guess;
      highest = lastGuess;
      lastGuess = guess;
      guessSubmit.click();
      guessNum++;
    }
    else {
      win = true;
      console.log('win');
      resetGame();
    }
  }
  return guessNum;
};

let games = 0;
const guessesPerGame = [];

while (games < 1000) {
  guessesPerGame.push(play());
  games++;
  console.log(guessesPerGame);
};

let total = 0;
for(let i = 0; i < guessesPerGame.length; i++) {
    total += guessesPerGame[i];
}
let avg = total / guessesPerGame.length;

console.log('Average guesses per game = '+avg);
