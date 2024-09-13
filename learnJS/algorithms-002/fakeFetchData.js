"use strict";

const fakeUrl = "http://asd.com";

const fetchData = function (url, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback(url));
    }, 2000);
  });
};

const callback = (url) => {
  return { result: `Some data receiasdasdved from ${url}` };
};

fetchData(fakeUrl, callback).then((data) => console.log(data));
