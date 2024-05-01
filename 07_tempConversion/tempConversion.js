const convertToCelsius = function(tempFahrenheit) {
	let tempCelcius = (tempFahrenheit - 32) * (5/9);
    return Math.round(tempCelcius * 10) / 10; //round to 1 decimal
};

const convertToFahrenheit = function(tempCelcius) {
	let tempFahrenheit = (tempCelcius *(9/5)) + 32;
	return Math.round(tempFahrenheit * 10) / 10; //round to 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
