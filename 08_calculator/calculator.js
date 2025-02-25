const add = function(...dodawanie) {
  let wynik = 0;
  for(let i = 0;i < dodawanie.length;i++) {
    wynik += dodawanie[i]
  }
  return wynik
};

const subtract = function(...odejmowanie) {
  return odejmowanie.reduce((acc,sub) => {
    return acc - sub
  })
	
};

const sum = function(suma) {
  return parseInt(suma.reduce((acc,sum) => {
    return acc + sum
  },0))
	
};

const multiply = function(mnozenie) {
  return parseInt(mnozenie.reduce((acc,sum) => {
    return acc * sum
  }))

};

const power = function(...potegi) {
  let costam = parseInt(potegi.reduce((acc,sum) => {
    return acc ** sum
  }))
return costam
	
};

const factorial = function(liczba) {
  if(liczba == 0 ) {
    return 1;
  }
  else {
    let wynik = 1;
    for(let i = 1;i <= liczba;i++) {
      wynik *= i
    }
    return wynik;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
