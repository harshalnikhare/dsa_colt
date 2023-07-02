// function countUniqueValues(arr) {
//   let first = 0;
//   let second = 1;
//   let count = arr.length >= 1 ? 1 : 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[first] !== arr[second]) {
//       count++;
//     }
//     first++;
//     second++;
//   }
//   return count;
// }

// alternate solution building the unique array
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.length >= 1 ? i + 1 : 0;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
