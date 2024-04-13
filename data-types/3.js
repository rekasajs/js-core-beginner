function sumFirstAndLastDigit(number) {
  const str = number + '';
  const firstDigit = +str.charAt(0);
  const lastDigit = +str.charAt(str.length - 1);
  console.log(`Сумма первой и последней цифры числа ${number} равна: ${firstDigit + lastDigit}`);
}

sumFirstAndLastDigit(23849234);
