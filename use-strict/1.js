'use strict';

const fuctiorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fuctiorial(n - 1);
  }
};

console.log(`Факториал числа 6 равен ${fuctiorial(6)}`);
