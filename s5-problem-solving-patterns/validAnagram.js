function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freqCounter = {};

  for (let char of str1) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqCounter[char]) return false;

    if (freqCounter[char] === 1) delete freqCounter[char];
    else freqCounter[char] = freqCounter[char] - 1;
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
