"use strict";

function createRandomNumbers(countNumbers) {
  let i = 1;
  let randomNumber = 0;

  while (i < countNumbers) {
    randomNumber = Math.random();
    randomNumber *= 100;
    console.log(randomNumber.toFixed(0));

    i++;
  }
}

createRandomNumbers(5);
