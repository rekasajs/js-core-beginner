async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе к API: ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Ошибка при обращении к API: ${url}`);
  }
}

const apiUrl = 'https://api.example.com/data';

fetchData(apiUrl)
  .then((result) => {
    console.log('Полученный результат:', result);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
