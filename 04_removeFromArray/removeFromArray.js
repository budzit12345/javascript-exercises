const removeFromArray = function(x,num) {
    y = [];

    for(let i = 0;i < x.length;i++) {
        if(x[i] !== num) {
            y.push(x[i]); 
        }
        else {
            continue
        }
    }
    return y;


};

// Do not edit below this line
module.exports = removeFromArray;
