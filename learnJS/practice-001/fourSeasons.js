"use strict";

// Смена времен года через рекурсию и setTimeout.
let years = 0; // стартовый год

const theEndYear = 2; // через сколько лет закончится таймер
const month = 3; // количество месяцев в сезоне
const seconds = 100; // скорость секунды (в миллисекундах)

function summer(a) {
  if (years == theEndYear) return theEndYear;
  if (a == 0) console.log("current season: summer");
  if (a == month) {
    years++;
    return autumn(0);
  } else {
    setTimeout(() => {
      console.log("month");
      return summer(a + 1);
    }, seconds);
  }
}

function autumn(b) {
  if (b == 0) console.log("current season: autumn");
  if (b == month) {
    return winter(0);
  } else {
    setTimeout(() => {
      console.log("month");
      return autumn(b + 1);
    }, seconds);
  }
}

function winter(c) {
  if (c == 0) console.log("current season: winter");

  if (c == month) {
    return spring(0);
  } else {
    setTimeout(() => {
      console.log("month");
      return winter(c + 1);
    }, seconds);
  }
}

function spring(d) {
  if (d == 0) console.log("current season: spring");

  if (d == month) {
    console.log(`прошло лет: ${years}
    `);
    return summer(0);
  } else {
    setTimeout(() => {
      console.log("month");
      return spring(d + 1);
    }, seconds);
  }
}

summer(0);
