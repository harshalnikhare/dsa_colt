function maxSubArraySum(arr, num) {
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
