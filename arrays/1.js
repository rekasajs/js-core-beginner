function increaseElementsByTenPercent(array) {
  return array.map((number) => +(number * 1.1).toFixed(1));
}

console.log('Массив с увеличенными числами на 10%:', increaseElementsByTenPercent([1, 2, 3, 4, 5]));
