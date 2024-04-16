function accessProperty(obj) {
  try {
    return obj.property;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Произошла ошибка доступа к свойству неопределенного объекта.');
    } else {
      throw error;
    }
  }
}

const obj = {
  surname: 'Селицкий',
};
accessProperty(obj.name);
