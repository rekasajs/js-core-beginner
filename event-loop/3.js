function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Сгенерированное число: ${randomNumber} больше 5`));
      }
    }, randomNumber * 1000);
  });
}

generateRandomNumber()
  .then((number) => {
    console.log('Сгенерированное число:', number);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
