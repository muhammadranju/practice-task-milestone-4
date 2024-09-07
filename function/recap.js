/**
 * Converts a given number of inches to feet and inches.
 * @param {number} inch The number of inches to convert.
 * @returns {string} A string representation of the conversion, e.g. "5 feet 8 inches".
 */
function inchToFeet(inch) {
  const toFeet = inch / 12;
  const feetNumber = parseInt(toFeet);
  const toInch = inch % 12;

  return `${feetNumber} feet ${toInch} inch`;
}

// console.log(inchToFeet(75));

// function mailToKilo(number) {
//   return {
//     mail: number * 1.60934,
//     kilo: number * 0.621371,
//   };
// }

// const result = mailToKilo(1);
// console.log(result.kilo);
// console.log(result.mail);

function oddAvg(numbers) {
  let avg = 0;
  for (const number of numbers) {
    if (number % 2 === 1) {
      avg += number;
    }
  }
  return avg / numbers.length;
}
const number = [13, 7, 14, 51, 59, 67, 32, 52];
const result = oddAvg(number);
console.log(result);

function evenAvg(numbers) {
  let avg = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      avg += number;
    }
  }
  return avg / numbers.length;
}
const number2 = [13, 7, 14, 51, 59, 67, 32, 52];
const result2 = evenAvg(number2);
console.log(result2);
