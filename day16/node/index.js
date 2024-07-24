const { odd, even } = require("./var");
const isEven = require("./func");

function checkStringOddEven(str) {
  return str.length % 2 ? odd : even;
}

console.log(isEven(10));
console.log(checkStringOddEven("hello"));
