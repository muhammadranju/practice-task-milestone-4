const money = -10;
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
let price = 500;
const isLeader = false;
const payPrice = (price = !isLeader ? price + 100 : 0);
// console.log(payPrice);

if (!isLeader) {
  price = price + 100;
} else {
  price = 0;
}
// console.log(price);

if (isLeader) {
  if (price > 500) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price = +1000;
}

console.log(price);
