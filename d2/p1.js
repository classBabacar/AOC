const { input } = require("./input");

let safeCount = 0;
input.forEach((line) => {
  const allNumbers = line.split(" ");

  // console.log(allNumbers, isDecreasing(allNumbers), isIncreasing(allNumbers));
  if (isDecreasing(allNumbers)) {
    safeCount++;
  } else if (isIncreasing(allNumbers)) {
    safeCount++;
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
