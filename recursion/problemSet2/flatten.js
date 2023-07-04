function flatten(arr) {
  const flattenArr = [];

  function flattenHelper(arr) {
    if (typeof arr[0] === "number") flattenArr.push(arr[0]);
    if (Array.isArray(arr[0])) flattenHelper(arr[0]);
  }
  flattenHelper(arr);
  return flattenArr;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
