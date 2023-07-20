function merge(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
      mergedArr.push(arr1[i]);
    } else {
      j++;
      mergedArr.push(arr2[j]);
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}
