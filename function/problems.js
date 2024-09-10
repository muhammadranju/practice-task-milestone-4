// const heights = [65, 66, 71, 72, 46, 80, 73, 92, 56];

// console.log(Math.min(...heights));

// const phones = [
//   { id: 1, name: "Samsung", price: 20000, camera: "12mp", color: "Black" },
//   { id: 1, name: "Xoami", price: 18000, camera: "12mp", color: "Black" },
//   { id: 1, name: "Oppo", price: 27000, camera: "12mp", color: "Black" },
//   { id: 1, name: "Vivo", price: 30000, camera: "12mp", color: "Black" },
//   { id: 1, name: "Iphone", price: 50000, camera: "12mp", color: "Black" },
// ];

// this is real life problem you can do it on real project
// function getLowerPrice(phones) {
//   let min = phones[0];
//   for (const phone of phones) {
//     if (phone.price < min.price) {
//       min = phone;
//     }
//   }
//   return min;
// }
// const min = getLowerPrice(phones);
// console.log(min);

// this problem is real life problem, how to sum of price in array of object in real life project
// const products = [
//   { name: "laptop", price: 300 },
//   { name: "mobile", price: 100 },
//   { name: "mouse", price: 700 },
//   { name: "keyboard", price: 1200 },
// ];

// function getShopping(products) {
//   let total = 0;
//   for (const product of products) {
//     total = total + product.price;
//   }
//   return total;
// }

// const total = getShopping(products);
// console.log(total);

function checkName(name) {
  // let lastLetter = name[name.length - 1];
  if (typeof name !== "string") {
    return "invalid";
  }
  let lastLetter = name?.slice(-1).toLowerCase();
  let checkArray = ["a", "y", "i", "e", "o", "u"];
  let result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}

// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhanker"));
// console.log(checkName(199));
// console.log(checkName(["JHFJN"]));

function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }
  let result = [];
  for (let num of array) {
    if (typeof num === "number") {
      result.push(num);
    }
  }
  return result;
}

// console.log(
//   deleteInvalids([
//     1,
//     2,
//     4,
//     7,
//     "hdjf",
//     null,
//     undefined,
//     { dd: "hdf" },
//     [1, 5, 2, 5],
//   ])
// );

function password(obj) {
  if (
    typeof obj.name !== "string" ||
    typeof obj.birthYear !== "number" ||
    typeof obj.siteName !== "string"
  ) {
    return "invalid";
  }
  if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  let capitalize = obj.siteName[0].toUpperCase().concat(obj.siteName.slice(1));
  let password = `${capitalize}#${obj.name}@${obj.birthYear}`;
  return password;
}

console.log(password({ birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 2002, siteName: "Facebook" }));

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = 0;

  for (let payment of arr) {
    if (payment >= 3000) {
      let tax = payment * 0.2;
      totalIncome += payment - tax;
    } else {
      totalIncome += payment;
    }
  }
  const savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([1000, 2000, 2500], 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings(100, [900, 2700, 3400]));

// const arr = [14, 2, 55, 102, 7, 74, 9, 2, 41, 7, 28, 2, 96, 1];

// let max = 0;
// for (let num of arr) {
//   if (num >= max) {
//     max = num;
//   }
// }
// console.log(max);

// 1. Array Manipulation Using Functions and Loops
// Write a function that takes an array of numbers as input, iterates over it using a loop, and returns a new array containing the square of each number. Additionally, explain how you can modify this function to handle cases where the input might include non-number values, and how to filter them out using booleans.

// 2. Object and Function Interaction
// Define an object that represents a person with properties like name, age, and isStudent (a boolean). Write a function that accepts this object and a string as arguments, and updates the name property based on the given string. Discuss how object references work in JavaScript and how functions can modify objects passed to them.

// 3. Boolean Logic in Conditionals
// Write a function that accepts two boolean values and returns a message based on the combination of those values using conditionals. For example, if both values are true, return "Both are true." If only one is true, return "One is true." If neither are true, return "None are true." Explain the role of logical operators (&&, ||, !) in this problem.

// 4. String Manipulation Using Functions
// Write a function that takes a string as input and returns an object with two properties: length (the number of characters in the string) and reversed (the reversed version of the string). Use a loop to reverse the string, and explain the process of iterating over string characters and how string manipulation works in JavaScript.

// 5. Using Arrays and Objects Together
// Create an array of objects where each object represents a student with properties like name, age, and grade. Write a function that takes this array and returns the average grade of the students. Explain how you can use loops to iterate over the array, access object properties, and calculate the result.

// 6. Number Manipulation and Boolean Evaluation
// Write a function that accepts an array of numbers and returns an object with two properties: positiveCount (the count of positive numbers) and negativeCount (the count of negative numbers). Use a loop to iterate over the array and boolean logic to check if each number is positive, negative, or zero. Explain how number comparison and booleans interact in this problem.

// 7. Array Sorting Using Custom Functions
// Implement a function that takes an array of strings and returns a new array sorted in alphabetical order. Additionally, implement a boolean parameter that allows the user to reverse the sorting order (ascending or descending). Discuss how to use JavaScript’s sort() function and how booleans can control sorting logic.

// 8. Looping Through Objects and Arrays
// Define an object with multiple properties (like name, age, and hobbies, where hobbies is an array of strings). Write a function that takes this object as input and prints each property using a for...in loop for the object and a for loop for the hobbies array. Discuss the difference between looping through an object and an array in JavaScript.

// 9. Filtering and Transforming Arrays
// Write a function that accepts an array of numbers and returns a new array that contains only the even numbers, each multiplied by 2. Use both a for loop and the filter() and map() functions, and explain the advantages of using higher-order functions like filter() and map() over traditional loops.

// 10. String Search and Boolean Logic
// Write a function that takes a string and a character as input and returns true if the character exists in the string and false otherwise. Use a loop to check each character of the string, and explain the role of boolean values in this process and how string indexing works in JavaScript.

/**
 * Calculates the total daily income of a restaurant based on sales and expenses
 */
function restaurantMonthlyIncome() {
  // Monthly salary of each staff member
  const staffMonthlySalary = 15000;

  //  Monthly salary of the manager
  const managerMonthlySalary = 30000;

  // Price of each item
  const pizza = 1000;
  const burger = 300;
  const juice = 123;
  const water = 20;

  // Number of units sold of each item
  let pizzaSalesUnits = 50;
  let burgerSalesUnits = 100;
  let juiceSalesUnits = 100;
  let waterSalesUnits = 50;

  // Calculates the total daily sales revenue
  const totalDailySalesRevenue = // total here: 93300
    pizzaSalesUnits * pizza +
    burgerSalesUnits * burger +
    juiceSalesUnits * juice +
    waterSalesUnits * water;

  // Calculates the total monthly sales revenue
  const totalMonthlySalesRevenue = totalDailySalesRevenue * 30; // total here: 2799000

  // Calculates Monthly salary of staff and manager
  const totalMonthlySalary = staffMonthlySalary * 5 + managerMonthlySalary; // total here: 105000

  // Calculates the total daily sales revenue profit
  const totalDailySalesRevenueProfit =
    totalMonthlySalesRevenue - totalMonthlySalary; // total here: 2694000

  // console.log("The total daily income is", totalDailySalesRevenueProfit);
  console.log("The total daily income is", totalDailySalesRevenueProfit);
}

// restaurantMonthlyIncome();
