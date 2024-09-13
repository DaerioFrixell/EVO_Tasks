"use strict";

const calc = {
  a: 2,
  b: 10,
  read() {
    console.log({ a: this.a, b: this.b });
  },

  sum() {
    const sum = this.a + this.b;
    return console.log(`sum a, b = ${sum}`);
  },

  mult() {
    const mult = this.a * this.b;
    return console.log(`mult a, b = ${mult}`);
  },
};

calc.read();
calc.sum();
calc.mult();
