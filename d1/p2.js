const { input } = require("./input");

let countMap = {};

input.forEach((line) => {
  const allNumbers = line.split("  ");
  const n2 = parseInt(allNumbers[1].trim());

  if (countMap[n2] === undefined) {
    countMap[n2] = 1;
  } else {
    countMap[n2]++;
  }
});

let result = 0;

input.forEach((line) => {
  const allNumbers = line.split("  ");
  const n1 = parseInt(allNumbers[0].trim());

  if (countMap[n1] === undefined) {
    result += 0;
  } else {
    result += n1 * countMap[n1];
  }
});

console.log(result);
