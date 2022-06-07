const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (x, y, z) => {
  let ratio = ratioOfTwoNumbers(x, y);
  let factorial = factorialOfNumber(z);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
