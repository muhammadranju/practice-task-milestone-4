// const money = -10;
// if (money > 300) {
//   console.log("Bor you are rich!!");
// } else {
//   if (money > 100) {
//     console.log("tui gorib o na boro lok o na");
//   } else {
//     if (money > 0) {
//       console.log("dosto kola kha. calcium bara");
//     } else {
//       console.log("tui amar bondhu na.");
//     }
//   }
// }

// using ternary operator
// let price = 500;
// const isLeader = false;
// const payPrice = (price = !isLeader ? price + 100 : 0);
// // console.log(payPrice);

// if (!isLeader) {
//   price = price + 100;
// } else {
//   price = 0;
// }
// // console.log(price);

// if (isLeader) {
//   if (price > 500) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price = +1000;
// }

// console.log(price);

// using shortcut not operator

// const isLeader = true;

// if (!isLeader) {
//   console.log("vitore dukte dibi na");
// } else {
//   console.log("leader ascha! chair charo");
// }

// const isPassed = true;
// if (!isPassed) {
//   console.log("you are failed");
// } else {
//   console.log("you are passed");
// }

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// console.log(newArr[0]);

// let text = "How - are you doing - today?";

// const newArr = text.split("-");

// console.log(newArr.join(""));

// console.log(newArr);

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// const new2 = newArr.forEach((i) => {
//   sum += i;
// });

// console.log(new2);
// console.log(sum);

// const myArr = newArr.map((i) => {
//   console.log(i);
// });

// console.log(myArr);
// for (let i = 0; i < newArr.length; i++) {
//   sum += newArr[i];
//   //   console.log(i + 2);
// }

// let i = 0;
// while (i <= newArr.length) {
//   console.log(i);
//   i++;
// }
// console.log(sum);

// for (let i = 100; i <= 100; i--) {
//   console.log(i);

//   if (i === 0) break;
// }

// even number
// let start = 1;
// let end = 20;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even Numbers: ${i}`);
//   }
// }

// // odd number
// for (let i = start; i <= end; i++) {
//   if (i % 2 !== 0) {
//     console.log(`Odd Numbers: ${i}`);
//   }
// }

// let total = 0;
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//     total += i;
//   }
// }
// console.log(total);

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// console.log(5 % 5);
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

while (i <= 10) {
  console.log(i);
  i++;
}
