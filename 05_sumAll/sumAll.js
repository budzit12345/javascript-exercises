const sumAll = function(x,y) {
    let suma = 0;
    if(x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number" || x % 1 !== 0 || y % 1 !== 0 ){
        return "ERROR"
    }
    else if (x > y) {
        for(let i = y;i <= x;i++) {
            suma += i;
        }
        return suma
    }
    else {
        for(let j = x;j <= y;j++) {
            suma += j;
        }
        return suma;
    }


};

// Do not edit below this line
module.exports = sumAll;
