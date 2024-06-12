function minSubArrayLen(arr, num) {
  let min = arr.length;
  let sum = 0;
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (sum < num && j < arr.length) {
      sum += arr[j];
      j++;
    } else if (sum >= num) {
      min = Math.min(min, j - i);
      sum -= arr[i];
      i++;
    } else {
      break;
    }
    // console.log(sum, min);
  }

  return min === arr.length ? 0 : min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
