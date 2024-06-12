function areThereDuplicates(...args) {
  const freqCounter = {};

  for (let arg of args) {
    freqCounter[arg] = (freqCounter[arg] || 0) + 1;
  }

  for (let fc in freqCounter) {
    if (freqCounter[fc] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
