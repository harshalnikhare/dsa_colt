function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};

  for (let curr of arr1) {
    curr = Math.pow(curr, 2);
    freqCounter1[curr] = (freqCounter1[curr] || 0) + 1;
  }

  let freqCounter2 = {};
  for (let curr of arr2) {
    freqCounter2[curr] = (freqCounter2[curr] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if ((!key) in freqCounter2) return false;
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); //false
