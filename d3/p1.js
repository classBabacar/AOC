const { input } = require("./input");

let sum = 0;
input.forEach((line) => {
  //  console.log(findAllIndexes("mul", line));

  const idxs = findAllIndexes("mul", line);
  for (let i = 0; i <= idxs.length - 1; ++i) {
    // Indexes of where the "mul" exists in the current line
    const start = idxs[i];
    const end = i == idxs.length - 1 ? line.length : idxs[i + 1];

    sum += getMultipleSum(line, start, end);
  }
});

console.log("Result:", sum);

function findAllIndexes(phrase, string) {
  const indexes = [];
  let startIndex = 0;

  while (true) {
    let index = string.indexOf(phrase, startIndex);
    if (index === -1) {
      break;
    }
    indexes.push(index);
    startIndex = index + phrase.length; // Move past the current match
  }

  return indexes;
}

function getMultipleSum(line, start, end) {
  let expression = "";
  for (let i = start; i < end; ++i) {
    expression += line[i];
  } // i.e. mul(2,4)

  // if the string is too small and doesnt contain at least "mul("
  if (expression.length < 4) return 0;

  let checkMulString = "";
  let idx;
  for (idx = 0; idx < 4; ++idx) checkMulString += expression[idx];

  if (checkMulString != "mul(") return false;

  let firstDigit = "";
  while (idx < expression.length && expression[idx] != ",") {
    firstDigit += expression[idx];
    idx++;
  }

  if (!isDigit(firstDigit) || idx == expression.length) return 0;

  idx = idx + 1;

  let secondDigit = "";
  while (idx < expression.length && expression[idx] != ")") {
    secondDigit += expression[idx];
    idx++;
  }

  if (!isDigit(secondDigit) || expression[idx] != ")") return 0;

  // console.log("first Digit:", firstDigit, "second Digit:", secondDigit);
  return firstDigit * secondDigit;
}

function isDigit(str) {
  const num = Number(str);
  return !isNaN(num) && num.toString() === str;
}
