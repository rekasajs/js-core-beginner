function fetchFromAPIs(apiUrls) {
  const promises = apiUrls.map((apiUrl) => {
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при запросе к API: ${apiUrl}`);
        }
        return response.json();
      })
      .catch((error) => {
        throw new Error(`Ошибка при обращении к API: ${apiUrl}`);
      });
  });

  return Promise.all(promises).then((results) => {
    return results.reduce((combinedResult, result, index) => {
      combinedResult[apiUrls[index]] = result;
      return combinedResult;
    }, {});
  });
}

const apiUrls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];

fetchFromAPIs(apiUrls)
  .then((combinedResult) => {
    console.log('Объединенные результаты из всех API:', combinedResult);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
