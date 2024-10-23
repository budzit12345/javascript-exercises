const removeFromArray = function(array, ...num) {
    var i = 0;
    while(i < array.length) {
        if(num.includes(array[i])) {
            array.splice(i, 1);  
        } else {
            i++;
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
