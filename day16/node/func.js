const { odd, even } = require("./var");

function checkOddOrEven(num) {
  return num % 2 ? odd : even;
}

module.exports = checkOddOrEven;
