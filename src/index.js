

const createCheatCode = (secretWord) => {
  const keyPresses = new Array(secretWord.length);
  console.log(keyPresses);
  document.addEventListener('keypress', evt => {
    keyPresses.shift();
    keyPresses.push(evt.key);
    console.log(keyPresses.join(''));
    if (keyPresses.join('').toLowerCase() === secretWord.toLowerCase()) {
      alert('enjoy your '+ secretWord);
    };
  });

};
createCheatCode('kebab');

const displayMouseClickCoordinates = () => {
  document.addEventListener('dblclick', evt => {
    document.querySelector('.output').innerHTML = ('Doubleclick coords: X:'+evt.clientX+' Y:' + evt.clientY);
  });
};
displayMouseClickCoordinates();

const touchToConsole = () => {
  document.querySelector('.touch').addEventListener('touchstart', evt => {
    console.log('you touched me');
  });
};
touchToConsole();

const createStupidTimer = (timeInSeconds) => {
  setTimeout(() => {
    console.log('do something!');
  }, timeInSeconds * 1000);
};
createStupidTimer(5);

const inactivityTimer = (timeInSeconds) => {
  const output = document.querySelector('.output');
  let timer;

  const resetTimer = evt => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      output.textContent = 'Do something...!!!';
    }, timeInSeconds * 1000);
  };
  resetTimer();
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  document.addEventListener('touchstart', resetTimer);
};
inactivityTimer(5);
