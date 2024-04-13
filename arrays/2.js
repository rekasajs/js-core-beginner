function sumFirstHalf(array) {
  return array.splice(0, array.length / 2).reduce((sum, num) => (sum += num));
}

console.log('Сумма первой половины элементов массива:', sumFirstHalf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
