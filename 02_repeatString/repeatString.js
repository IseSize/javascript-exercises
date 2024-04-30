const repeatString = function(string, num) {

    // Solution2 -- as requested in #Hints in README.md 
    let repeatedString = "";
    if(num < 0) {
        return "ERROR";
    }
    for(let i = 0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;


    
    // Solution1 -- .repeat() method
    // if(num < 0) {
    //     return "ERROR";
    // }
    // return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
