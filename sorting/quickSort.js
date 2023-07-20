import { swap } from "./swap.js";

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
