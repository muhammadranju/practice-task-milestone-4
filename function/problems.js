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

// console.log(
//   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
// );
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 2002, siteName: "Facebook" }));

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
