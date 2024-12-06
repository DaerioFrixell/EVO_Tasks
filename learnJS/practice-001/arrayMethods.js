"use-strict";

(function fn() {
  const simpleStringArray = ["val 1", "val 2", "val 3", "val 4", "val 5"];
  const simpleNumberArray = [2, 3, 7, 4, 1]; // sum === 16;

  const result = simpleStringArray.reduce(
    (prev, current, currentIndex, array) => {
      prev.push(Number(current.slice(4)));

      return prev;
    },
    []
  );

  return console.log("result: ", result);
})();

const generateArrayWithSaticValue = (length, initValue) => {
  return new Array(length).fill(initValue);
};

const createdArray = generateArrayWithSaticValue(15, "qwe");
