const palindromes = function (str) {
    str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"");
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr;
};
console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
