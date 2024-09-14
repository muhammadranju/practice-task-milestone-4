function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

console.log(isObject({})); // 👉️ true
console.log(isObject([])); // 👉️ false false
