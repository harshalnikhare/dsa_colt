// function isSubsequence(arr1, arr2) {
//   let i = 0;
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       i++;
//     }
//     if (arr1.length === i) {
//       return true;
//     }
//   }
//   return false;
// }

// recursive
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
