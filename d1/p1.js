const { input } = require("./input");

const ListA = [];
const ListB = [];

input.forEach((line) => {
  const allNumbers = line.split("  ");

  const n1 = parseInt(allNumbers[0].trim());
  const n2 = parseInt(allNumbers[1].trim());

  ListA.push(n1);
  ListB.push(n2);
});

ListA.sort();
ListB.sort();

let result = 0;
for (let i = 0; i < ListA.length; ++i) {
  result += Math.abs(ListA[i] - ListB[i]);
}

console.log(result);
