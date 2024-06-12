function maxSubarraySum(arr, num) {
  if (arr.length === 0) return null;

  let maxSum = 0;
  let tmpSum = 0;

  for (let i = 0; i < num; i++) {
    tmpSum += arr[i];
  }
  maxSum = tmpSum;

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum + arr[i] - arr[i - num];
    maxSum = Math.max(tmpSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([], 3)); // null
