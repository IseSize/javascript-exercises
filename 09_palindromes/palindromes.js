const palindromes = function (str) {
    let strFormated ="";
    let removeChars = ["!", ",", ".", " "];
    for (let char of str) {
        if(!removeChars.includes(char)) {
            strFormated += char.toLowerCase();
        }
    }
    let reversedStr = strFormated.split('').reverse().join("");
    if (strFormated === reversedStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
