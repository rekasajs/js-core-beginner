function checkInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error('Пожалуйста, введите целое число!');
  }
}

try {
  checkInteger(5.5);
  console.log('Число является целым.');
} catch (error) {
  console.error(error.message);
}
