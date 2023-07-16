function stringSearch(sen, word) {
  let counter = 0;
  for (let i = 0; i < sen.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== sen[i + j]) {
        break;
      } else if (j === word.length - 1) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(stringSearch("wowomgzomg", "omg"));

// bonus replace with that string
