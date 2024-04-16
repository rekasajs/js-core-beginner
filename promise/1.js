function sequentialAsyncOperations(operations) {
  let sequence = Promise.resolve();

  for (let operation of operations) {
    sequence = sequence.then(operation);
  }

  return sequence;
}

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Операция 1 завершена');
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Операция 2 завершена');
      resolve();
    }, 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Операция 3 завершена');
      resolve();
    }, 500);
  });
}

sequentialAsyncOperations([asyncOperation1, asyncOperation2, asyncOperation3])
  .then(() => {
    console.log('Все операции завершены');
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
