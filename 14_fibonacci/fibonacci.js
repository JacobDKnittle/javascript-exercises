const fibonacci = function(num) {
    if (num < 0) return 'OOPS'
    let nums = [0,1];
    for (let i = 0; i < +num; i++) {
        nums.push(nums[i] + nums[i + 1]);
    }
    return nums[+num];
};

fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// Do not edit below this line
module.exports = fibonacci;
