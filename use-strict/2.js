const isIncludeNumber = (array, number) => {
  return array.includes(number)
    ? `Значение ${number} присутствует в массиве ${array}`
    : `Значение ${number} не присутствует в массиве ${array}`;
};

console.log(isIncludeNumber([1, 3, 4, 7, 3], 1));
