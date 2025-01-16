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

////////////////////////////////
// CHALLENGE
/* Let's say you're building a time tracking app for the freelancers.
  At some point in building this app, you need to create a function that receives daily work hours as an array and returns an object with the following properties:

  1. Total hours worked
  2. average daily hours worked
  3. The day with the most hours worked
  4. number of days worked
  5. Whether the week was full-time (40 hours) or part-time (less than 40 hours)

  Test data: [7, 5, 8, 6.5, 0, 8.5, 4, 0]
 */

const workHours = [7, 5, 8, 6.5, 0, 8.5, 5];

const workTime = function (arr) {
  const work = {
    // accumulates the total hours worked
    totalHours: 0,
    // accumulates the total daily hours worked
    avgDailyHours: 0,
    // accumulates the total most hours worked
    mostHours: 0,
    // accumulates the total days hours worked
    daysWorked: 0,
  };

  // Loop through the array and calculate the total hours worked
  for (let freelanceApp of arr) {
    work.totalHours += freelanceApp;
    work.avgDailyHours = work.totalHours / arr.length;
    work.daysWorked = arr.length;
    work.mostHours = Math.max(...arr);

    // Check if the total hours worked is full-time or part-time
    if (work.totalHours >= 40) {
      work.workType = "full-time";
    } else {
      work.workType = "part-time";
    }
  }
  // Return the object
  return work;
};
// Call the function and log the result
console.log(workTime(workHours));
