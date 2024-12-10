const { input } = require("./input");

let safeCount = 0;
input.forEach((line) => {
  const allNumbers = line.split(" ");
  let prevNum = parseInt(allNumbers[0]);
  let isDecreasing = false;

  if (prevNum > allNumbers[1]) {
    isDecreasing = true;
  }

  let isSafe = true;
  let currNum;
  let difference;

  for (let i = 1; i < allNumbers.length; ++i) {
    currNum = parseInt(allNumbers[i]);
    difference = Math.abs(currNum - prevNum);

    if (difference > 3) isSafe = false;
    else if (isDecreasing && currNum >= prevNum) isSafe = false;
    else if (!isDecreasing && currNum <= prevNum) isSafe = false;

    prevNum = currNum;
  }

  if (isSafe) safeCount++;
});

console.log("Safe Reports:", safeCount);
