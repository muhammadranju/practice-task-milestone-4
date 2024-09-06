// function cutHalfNumber(numbers) {
//   return numbers / 2;
// }

// const half = cutHalfNumber;
// console.log(typeof half());

// function isEven(num) {
//   if (num % 2 === 0) {
//     return console.log("Even", num);
//   }
//   return console.log("Odd", num);
// }

// isEven(10);
// isEven(9);

// // What will happen when this function is called?

// function getMenu() {
//   //   return console.log("Burger, Pizza, Pasta");
//   return;
// }
// getMenu();

// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(n1, n2, n3, n4) {
  const multiply = n1 * n2 * n3 * n4;
  return multiply;
}
// const  result = multiply(10, 20, 30, 40);
// console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function isOddOrEven(number) {
  if (number % 2 === 0) {
    const result = number * 2;

    return result;
  } else {
    const result = number / 2;
    return result;
  }
}
// const result = isOddOrEven(10);
// console.log(result);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number) {
  let avg = 0;
  for (let avgNumber of number) {
    avg += avgNumber;
  }
  return avg / number.length;
}

// const number = [10, 20, 30, 40, 50];
// const result = make_avg(number);
// console.log(result);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary) {
  let countBinary = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      countBinary++;
    }
  }
  return countBinary;
}
// const binary = "10010010";
// const result = count_zero(binary);
// console.log(result);

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number) {
  if (number % 2 === 0) {
    return `Even: ${number}`;
  } else {
    return `Odd: ${number}`;
  }
}

// const num = 121;
// odd_even(num);
// const result = odd_even(num);
// console.log(result);
