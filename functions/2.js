function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

console.log('Исходный массив:', [64, 52, 25, 12, 223, 11, 90, 112, 20]);
console.log('Отсортированный массив:', bubbleSort([64, 52, 25, 12, 223, 11, 90, 112, 20]));
