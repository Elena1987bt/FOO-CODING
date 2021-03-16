'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(el => {
    if (el % 3 === 0 && el % 5 === 0) {
      threeCallback(el);
      fiveCallback(el);
    } else if (el % 3 === 0) {
      threeCallback(el);
    } else if (el % 5 === 0) {
      fiveCallback(el);
    }
  });
}

function sayThree(number) {
  console.log(number + ' is divisible  with 3');
}

function sayFive(number) {
  console.log(number + ' is divisible  with 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
