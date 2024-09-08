function duplicate(array) {
  let newNum = [];
  for (let items of array) {
    if (newNum.includes(items) === false) {
      newNum.push(items);
    }
  }
  return newNum;
}

const name = [
  "Ranju",
  "Md Ranju",
  "Ranju",
  "Amin",
  "Hossain",
  "Ranju",
  "Muhammad",
  "Ranju",
];

const number = [2, 4, 8, 69, 2, 5, 4, 7, 4, 2, 1];
// console.log(duplicate(name));
let min = [];
for (let i of number) {
  min.push(Math.min(i));
  //   console.log(Math.min(i));
}
// console.log(min);
// console.log(Math.min(number));

// console.log(Math.pow(2, 3));

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// console.log(Math.sqrt(0.95));
// // Expected output: 1
// console.log(Math.sqrt(4));
// // Expected output: 4
// console.log(Math.sqrt(7.004));
// // Expected output: 8
// console.log(Math.sqrt(-7.004));
// // Expected output: -7
