// round both to one decimal
const convertToCelsius = function(fahrenheit) {
  return Math.round((5 * (fahrenheit - 32) / 9) * 10) / 10;
};
console.log(convertToCelsius(100))
const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
