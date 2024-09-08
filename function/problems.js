// const heights = [65, 66, 71, 72, 46, 80, 73, 92, 56];

// console.log(Math.min(...heights));

const phones = [
  { id: 1, name: "Samsung", price: 20000, camera: "12mp", color: "Black" },
  { id: 1, name: "Xoami", price: 18000, camera: "12mp", color: "Black" },
  { id: 1, name: "Oppo", price: 27000, camera: "12mp", color: "Black" },
  { id: 1, name: "Vivo", price: 30000, camera: "12mp", color: "Black" },
  { id: 1, name: "Iphone", price: 50000, camera: "12mp", color: "Black" },
];

// this is real life problem you can do it on real project
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
