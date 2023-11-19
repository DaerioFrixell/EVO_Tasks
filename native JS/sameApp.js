"use strict"

// 1 ============ bubleSort:
let num1 = +prompt('впиши значение num1', 3);
let num2 = +prompt('впиши значение num2', 2);
console.log(`before num1 = ${num1} num2 = ${num2}`);

if (num1 > num2) {
    let c = num1;
    num1 = num2;
    num2 = c;
}

console.log(`after num1 = ${num1} num2 = ${num2}`);




// 2 ============ calc with 2 number. Sum and Mult:
const calc = {
    read() {
        this.a = 2;
        this.b = 5;
    },
    sum() {
        return console.log('sum is: ' + (this.a + this.b));
    },
    mult() {
        return console.log('mult is: ' + (this.a * this.b));
    },
}

calc.read();
calc.sum();
calc.mult();




// 3 ============ create random number 
function randomNumber(value) {
    const count = value;

    let i = 1;
    while (i < value) {
        let a = Math.random();
        a *= 100;
        console.log(a.toFixed(0));
        i++;
    }
}
randomNumber(5);

// 4 ============ смена времен года через рекурсию и setTimeout
const theEndYear = 2;
let years = 0;
const month = 3;
const seconds = 500;



function summer(a) {
    if (years == theEndYear) return theEndYear;
    if (a == 0) console.log('current season: summer');
    if (a == month) {
        years++;
        return autumn(0);
    } else {
        setTimeout(() => {
            console.log('month');
            return summer(a + 1);
        }, seconds)
    }
}

function autumn(b) {
    if (b == 0) console.log('current season: autumn');
    if (b == month) {
        return winter(0);
    } else {
        setTimeout(() => {
            console.log('month');
            return autumn(b + 1);
        }, seconds)
    }
}

function winter(c) {
    if (c == 0) console.log('current season: winter');

    if (c == month) {
        return spring(0);
    } else {
        setTimeout(() => {
            console.log('month');
            return winter(c + 1);
        }, seconds)
    }
}

function spring(d) {
    if (d == 0) console.log('current season: spring');

    if (d == month) {
        console.log(`прошло лет: ${years}
    `);
        return summer(0);
    } else {
        setTimeout(() => {
            console.log('month');
            return spring(d + 1);
        }, seconds)
    }
}

summer(0)




// 5 ============ расчет времени игрового
// real time
// const seconds = 1;
// const minute = 60 * seconds;
// const hour = 60 * minute;
// const day = 24 * hour;
// const week = 7 * day;
// const month = 4 * week;
// const year = 12 * month;
// console.log(year)

// game time
const hour = 8;
const day = 4 * hour;
// const month = 3 * day;
const year = 12 * month;

console.log(`hour = ${hour}sec`)
console.log(`day = ${day}sec`)
console.log(`month = ${month / 60}min`)
console.log(`year = ${year / 60}min`)


