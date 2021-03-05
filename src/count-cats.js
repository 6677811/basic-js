const CustomError = require("../extensions/custom-error");

module.exports = function countCats(data) {
  let count = 0;
  const result = [].concat(...data);
  result.forEach(element => {
    if (element === '^^') {
      count++;
    }
  });
  return count;
};
