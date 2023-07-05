function capitalizedWords(wordArr) {
  if (wordArr.length === 0) return [];

  const upperWord = wordArr[0].toUpperCase();
  return [upperWord].concat(capitalizedWords(wordArr.slice(1)));
}
let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
