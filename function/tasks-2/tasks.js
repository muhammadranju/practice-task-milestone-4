// Task -1:
// Find the lowest number in the array below.

const heights2 = [167, 190, 50, 140, 120, 165, 137];
let low = heights2[0];
for (let num of heights2) {
  if (low >= num) {
    low = num;
  }
}

// console.log(low);

// Task -2:
// Find the friend with the smallest name.
const friends = ["rahim", "robin", "rafi", "ron", "md", "rashed"];

let lowestFriends = friends[0].length;
let lowestName = "";
for (let name of friends) {
  if (lowestFriends >= name.length) {
    lowestName = name;
  }
}
// console.log(lowestName);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablet, mobile) {
  const laptopPrice = 1000;
  const tabletPrice = 500;
  const mobilePrice = 300;

  const total =
    laptop * laptopPrice + tablet * tabletPrice + mobile * mobilePrice;
  return total;
}

const totalBudget = calculateElectronicsBudget(2, 3, 5);
// console.log("Total Budget:", totalBudget);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phoneArray) {
  let totalPrice = 0;
  for (let phone of phoneArray) {
    totalPrice += phone.price;
  }
  const totalAveragePhonePrice = Math.floor(totalPrice / phoneArray.length);
  return totalAveragePhonePrice;
}
const result = findAveragePhonePrice(phones);
// console.log(result);

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalSalary(employees) {
  let totalYearlySalary = 0;

  for (let employee of employees) {
    const currentYearlySalary =
      employee.starting + employee.increment * employee.experience;
    totalYearlySalary += currentYearlySalary;
  }
  return Math.floor(totalYearlySalary / 12);
}

const totalMonthlySalary = calculateTotalSalary(employees);

// console.log(totalMonthlySalary);
