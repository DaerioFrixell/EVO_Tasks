"use strict";

const firstFn = () => console.log("first");
const secondFn = () => console.log("second");
const thirdFn = () => console.log("third");

const functionsArray = [firstFn, secondFn, thirdFn];
const delays = [2000, 1000, 3000];

const runInOrder = function (functionsArray, delays) {
  (function loopIt(i) {
    setTimeout(() => {
      functionsArray[i]();

      if (i < functionsArray.length - 1) loopIt(i + 1);
    }, delays[i]);
  })(0);
};

runInOrder(functionsArray, delays);
