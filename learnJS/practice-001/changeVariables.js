"use strict";

let num1 = 3;
let num2 = 1;

console.log(`BEFORE`, { num1, num2 });

if (num1 > num2) {
  let change = num1;
  num1 = num2;
  num2 = change;
}

console.log(`AFTER`, { num1, num2 });
