function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let alpha of str1) {
    lookup[alpha] ? lookup[alpha]++ : (lookup[alpha] = 1);
  }

  for (let alpha of str2) {
    if (!lookup[alpha]) {
      return false;
    } else {
      lookup[alpha]--;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
