const { input } = require("./input");

let safeCount = 0;
input.forEach((line) => {
  const currentSetOfNumbers = line.split(" ");

  if (isDecreasing(currentSetOfNumbers) || isIncreasing(currentSetOfNumbers)) {
    safeCount++;
  } else {
    for (let i = 0; i < currentSetOfNumbers.length; ++i) {
      const slicedArray = [
        ...currentSetOfNumbers.slice(0, i),
        ...currentSetOfNumbers.slice(i + 1),
      ];

      if (isDecreasing(slicedArray) || isIncreasing(slicedArray)) {
        safeCount++;
        break;
      }
    }
  }
});

console.log("Safe Reports:", safeCount);

function isDecreasing(list) {
  let [curr, prev, diff] = [0, 0, 0];

  for (let i = 1; i < list.length; ++i) {
    curr = parseInt(list[i]);
    prev = parseInt(list[i - 1]);
    diff = Math.abs(curr - prev);

    if (curr >= prev || diff > 3) return false;
  }

  return true;
}

function isIncreasing(list) {
  let [curr, prev, diff] = [0, 0, 0];

  for (let i = 1; i < list.length; ++i) {
    curr = parseInt(list[i]);
    prev = parseInt(list[i - 1]);
    diff = Math.abs(curr - prev);

    if (curr <= prev || diff > 3) return false;
  }

  return true;
}
