const removeFromArray = function(arr, ...args) {
    return arr.filter((num) => !args.includes(num))
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
