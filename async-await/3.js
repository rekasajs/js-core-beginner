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

async function fetchFromMultipleServers(urls) {
  try {
    const promises = urls.map((url) => fetchData(url));

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    throw new Error(`Произошла ошибка: ${error}`);
  }
}

const serverUrls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];

fetchFromMultipleServers(serverUrls)
  .then((results) => {
    console.log('Результаты запросов:', results);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
