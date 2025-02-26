const fibonacci = (n) => {
    // Zamiana stringa na liczbę
    n = Number(n);
  
    // Sprawdzenie, czy liczba jest ujemna
    if (n < 0) return "OOPS";
  
    // Obsługa przypadku n == 0
    if (n === 0) return 0;
  
    // Pierwsze dwa wyrazy ciągu Fibonacciego
    let a = 1, b = 1;
  
    // Obliczanie wartości dla n >= 3
    for (let i = 3; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
  };

// Do not edit below this line
module.exports = fibonacci;
