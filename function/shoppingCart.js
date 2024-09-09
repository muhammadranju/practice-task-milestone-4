// this is real life problem you can do it on real project
/**
const phones = [
  { id: 1, name: "Samsung", price: 20000, camera: "12mp", color: "Black" },
  { id: 1, name: "Xoami", price: 18000, camera: "12mp", color: "Black" },
  { id: 1, name: "Oppo", price: 27000, camera: "12mp", color: "Black" },
  { id: 1, name: "Vivo", price: 30000, camera: "12mp", color: "Black" },
  { id: 1, name: "Iphone", price: 50000, camera: "12mp", color: "Black" },
];

this is real life problem you can do it on real project
function getLowerPrice(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const min = getLowerPrice(phones);
console.log(min);


// this problem is real life problem, how to sum of price in array of object in real life project

const products = [
    { name: "laptop", price: 300 },
    { name: "mobile", price: 100 },
    { name: "mouse", price: 700 },
    { name: "keyboard", price: 1200 },
  ];

  function getShopping(products) {
    let total = 0;
    for (const product of products) {
      total = total + product.price;
    }
    return total;
  }

  const total = getShopping(products);
  console.log(total);
   */

// this problem is totally real problem for e commerce cart total counting function
/**
const products = [
  { name: "laptop", price: 300, quantity: 2 },
  { name: "mobile", price: 100, quantity: 1 },
  { name: "mouse", price: 700, quantity: 3 },
  { name: "keyboard", price: 1200, quantity: 2 },
];
function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  return total;
}

const shoppingCart = cartTotal(products);
console.log(shoppingCart);
 */

// function longest(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i <= str.length - 1; i++) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }
// console.log(longest("I am learning Programming to become a programmer"));

// function longest(string) {
//   let str = string.split(" ");
//   let lengthNum = 0;
//   let text = "";
//   for (const word of str) {
//     if (lengthNum < word.length) {
//       lengthNum = word.length;
//       text = word;
//     }
//   }
//   return text;
// }

// console.log(longest("I am learning Programming to become a programmer"));

// let num = null;
// console.log(typeof num);

function calculate(num1, num2, op) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please enter valid number";
  }
  if (num1 < 0 || num2 < 0) {
    return "please enter valid number";
  }
  if (op === "add") {
    return num1 + num2;
  } else if (op === "sub") {
    return Math.abs(num1 - num2);
  } else if (op === "mlt") {
    return num1 * num2;
  } else if (op === "div") {
    return num1 / num2;
  } else {
    return `your '${op}' not found in this calculator, eg: add, sub, mlt, div`;
  }
}

const result = calculate(5, 2, "add");

// console.log(Math.sign(result));
console.log(result);
// console.log(calculate(10, 10, "adda"));

// console.log(Math.sign(-3));
// let num = -123;
// let val = Math.sign(num);
// if (val === -1) {
//   console.log(num + " is negative number");
// } else {
//   console.log(num + " is posative number");
// }
