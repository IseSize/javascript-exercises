const sumAll = function(x, y) {
    if(x < 0  || y < 0 || typeof(x) !== "number" || typeof(y) !== "number") {
        return "ERROR";
    }
    let infNumber = x;
    let supNumber = y;
    if (x > y) { 
        infNumber = y;
        supNumber = x;
    }
    let sum = 0;
    for(let i = infNumber; i <= supNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
