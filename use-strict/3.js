const countVowelsLetters = (str) => {
  const vowels = 'аоуэыяёюеи';
  str = str.toLowerCase();
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(`Кол-во гласных в строке "Привет, Модсен!": ${countVowelsLetters('Привет, Модсен!')}`);
