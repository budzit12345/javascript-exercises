function sumAll(num1, num2) {
    // Sprawdzenie, czy którakolwiek z liczb jest ujemna
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // Sprawdzenie, czy oba argumenty są liczbami
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    // Sprawdzenie, czy oba argumenty są liczbami całkowitymi
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    // Zidentyfikuj mniejszą i większą liczbę
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let sum = 0;

    // Iteracja od mniejszej do większej liczby, sumowanie wszystkich wartości
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
