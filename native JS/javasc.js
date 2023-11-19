'use strict'
// // let arr = []
// const div = document.createElement('div')
// document.body.append(div)
// div.innerHTML = 'hi'

// $.ajax(`https://repetitora.net/api/JS/Images`, {
//   success: function (data) {
//     data.forEach(el => {
//       const div = document.createElement('div')
//       const img = document.createElement('img')
//       img.src = el.thumbnail;
//       div.innerHTML = img.src

//       // document.documentElement('div').appendChild(img)
//     });
//   }
// })

// console.log(document)
const second = 1000;

const theEndYear = 5;
let years = 0;
const month = 3;
const seconds = second * 0.1;

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

// summer(0)
