function fetchUrls(urls) {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка загрузки URL: ${url}`);
          }
          return response.text();
        })
        .then((data) => {
          resolve({ url, data });
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return Promise.all(promises);
}

const urls = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3'];

fetchUrls(urls)
  .then((results) => {
    console.log('Содержимое загруженных URL-адресов:');
    results.forEach(({ url, data }) => {
      console.log(`${url}: ${data}`);
    });
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
