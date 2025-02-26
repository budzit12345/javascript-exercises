const palindromes = function (str) {
    let costam = str.split(" ");
    let gowno = costam.join('').toLowerCase();
    let huj = gowno.replace(/[^a-zA-Z0-9]/g, '');
    
    let hujReversed = '';
    for(let i = huj.length - 1;i >= 0;i--) {
        hujReversed += huj[i]
    }

    if(huj === hujReversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
