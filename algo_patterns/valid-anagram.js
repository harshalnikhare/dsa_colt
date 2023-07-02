// function validAnagram(word1, word2) {
//   if (word1.length !== word2.length) {
//     return false;
//   }
//
//   let freq1 = {};
//   for (let alpha of word1) {
//     freq1[alpha] = (freq1[alpha] || 0) + 1;
//   }
//
//   let freq2 = {};
//   for (let alpha of word2) {
//     freq2[alpha] = (freq2[alpha] || 0) + 1;
//   }
//
//   for (let alpha in freq1) {
//     if (!(alpha in freq2)) {
//       return false;
//     }
//
//     if (freq1[alpha] !== freq2[alpha]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// Implementing with lookup
//
function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let lookup = {};
  for (let alpha of word1) {
    lookup[alpha] ? lookup[alpha]++ : (lookup[alpha] = 1);
  }

  for (let alpha of word2) {
    if (!lookup[alpha]) {
      return false;
    } else {
      lookup[alpha]--;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
