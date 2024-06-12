function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  let first = 0;
  let second = arr.length - 1;

  while (first < second) {
    const foundAvg = (arr[first] + arr[second]) / 2;
    if (foundAvg === avg) return true;
    else if (foundAvg < avg) first++;
    else second--;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
