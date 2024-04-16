async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе к серверу: ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Ошибка при загрузке данных: ${error}`);
  }
}

async function fetchFromFirstThenSecond(firstUrl, secondUrl) {
  try {
    const firstData = await fetchData(firstUrl);

    const secondData = await fetchData(secondUrl + `?param=${firstData.param}`);

    return { firstData, secondData };
  } catch (error) {
    throw new Error(`Произошла ошибка: ${error}`);
  }
}

const firstServerUrl = 'https://api.example.com/first-data';
const secondServerUrl = 'https://api.example.com/second-data';

fetchFromFirstThenSecond(firstServerUrl, secondServerUrl)
  .then((results) => {
    console.log('Результаты запросов:', results);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
