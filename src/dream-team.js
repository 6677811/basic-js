const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(data) {
  debugger;
  if (data === null || data === [] || data === undefined || data === false || !Array.isArray(data)) return false;

  let res = '';
  data.forEach(element => {
    if (typeof(element) === "string") {
      element = element.trim();
      res += element.charAt(0);
    }
  });
  return sort(res);
};

function sort(data) {
  return data.toUpperCase().split('').sort().join('');
};
