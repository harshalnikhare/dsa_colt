import { swap } from "./swap.js";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
    }
  }
  return arr;
}

console.log(insertionSort([5, 1, 3, 2, 4]));
console.log(insertionSort([2, 1, 9, 76, 4]));
