function sumOfSquares(array) {
  return array.reduce((sum, num) => (sum += num ** 2));
}

console.log('Сумма квадратов элементов массива:', sumOfSquares([1, 2, 3, 4, 5]));
