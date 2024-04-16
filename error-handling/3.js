function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error('Второе число не может быть нулем.');
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 2));
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.error(error.message);
}
