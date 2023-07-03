function averagePair(arr, avg) {
  let first = 0,
    second = arr.length - 1;

  while (first < second) {
    let possibleAvg = (arr[first] + arr[second]) / 2;
    if (possibleAvg === avg) {
      return true;
    } else if (possibleAvg < avg) {
      first++;
    } else {
      second--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
