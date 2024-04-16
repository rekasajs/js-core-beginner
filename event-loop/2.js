async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе к API: ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error(`Запрос к API превысил установленный таймаут: ${timeout} мс`);
    } else {
      throw new Error(`Произошла ошибка при загрузке данных: ${error.message}`);
    }
  }
}

const apiUrl = 'https://api.example.com/data';
const timeout = 5000;

fetchDataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log('Полученные данные:', data);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
