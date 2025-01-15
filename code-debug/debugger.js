"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C. FIX
    // value: Number(prompt("Degree Celcius:")),
    value: 10,
  };

  // B. FIND
  console.log(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A. IDENTIFY
console.log(measureKelvin());

// More Debugging
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (const curTemp of temps) {
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 2], [13, 6, 5]);
console.log(`amplitudeNew`, amplitudeNew);

////////////////////////////////
// CHALLENGE
/* Given an array of forecasted maximum temperatures,
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] => "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data 1: [17, 21, 23]
Test data 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(str);
};

printForecast(data1);
printForecast(data2);
