function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  const freqCounter = {};

  for (let num of num1) {
    freqCounter[num] = (freqCounter[num] || 0) + 1;
  }

  for (let num of num2) {
    if (!freqCounter[num]) return false;
    else freqCounter[num]--;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
