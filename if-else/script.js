"use strict";

/** 
 if (condition) { 
  statement 
 } else {
 statement
 } 
*/

let testCase = 1+1;

if (testCase == 2) {
  console.log("The answer is 2");
} else {
  console.log("The answer is 11");
}

/** Shorthand
 * container = (condition) ? "if true" : "if false";
 */

let testCase2 = (1+1) ? "The answer is 2" : "The answer is 11";
console.log(testCase2);

// Determine if Positive or Negative
let numGuess = -4
if (numGuess) {
  console.log(`The numGuess ${numGuess} is a Positive Number`);
} else {
  console.log(`The numGuess ${numGuess} is a Negative number`);
}

// Even or Odd
let isEven = (number) => {
  return number % 2 === 0;
}

let isOdd = (number) => {
  return number % 2 !== 0;
}

console.log(`isOdd? - 2`, isOdd(2));
console.log(`isOdd? - 3`, isOdd(3));
console.log(`isEven? - 1`, isEven(1));
console.log(`isEven? - 4`, isEven(4));