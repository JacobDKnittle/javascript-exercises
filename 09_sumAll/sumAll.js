const sumAll = function (startNum, endNum) {
  if (
    isNaN(startNum) ||
    isNaN(endNum) ||
    startNum < 0 ||
    endNum < 0 ||
    startNum % 1 != 0 ||
    endNum % 1 != 0 ||
    typeof startNum === "string" ||
    typeof endNum === "string"
  ) {
    return "ERROR";
  }
  if (startNum > endNum) {
    [startNum, endNum ] = [endNum, startNum];
  }
  let total = 0;
  for (let i = startNum; i <= endNum; i++) {
    total += i;
  }
  return total;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
