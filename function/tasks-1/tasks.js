// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(number) {
  return (number * 9.0) / 5.0 + 32.0;
}
// console.log(celsiusToFahrenheit(20));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countNumbers(number, find) {
  let count = 0;
  for (let num of number) {
    if (num === find) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5, 6, 6];

// console.log(countNumbers(numbers, 6));

// Task-3:
// Write a function to count the number of vowels in a string.

function getVowels(str) {
  const vowels = "aeiouAEIOU";
  let countVowels = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      countVowels++;
    }
  }
  return countVowels;
}
const str = "Hello, how are you?";
const count = getVowels(str);
// console.log(count);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestName(names) {
  let longName = names.split(" ");
  let nameLength = longName[0];

  for (let name of longName) {
    if (name.length > nameLength.length) {
      nameLength = name;
    }
  }
  return nameLength;
}

const outPut = longestName("I am learning Programming to become a programmer");
// console.log(outPut);

// Task-5:
// Generate a random number between 10 to 20.

function getRandomNumber() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

const randomNum = getRandomNumber();
// console.log(randomNum);
