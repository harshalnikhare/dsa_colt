import { swap } from "./swap.js";

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
