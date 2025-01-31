const convertToCelsius = function(n) {
  let toCelcius = (n - 32) * 5/9
  if(toCelcius % 1 !== 0) {
    return Number(toCelcius.toFixed(1))
  }
  else {
    return toCelcius
  }
};

const convertToFahrenheit = function(x) {
  let toFahrn = (x * 9/5 + 32) 
  if(toFahrn % 1 !== 0) {
    return Number(toFahrn.toFixed(1))
  }
  else {
    return toFahrn
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
