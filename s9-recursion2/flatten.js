function flatten(arr) {
  const flatArr = [];

  function recursiveFlatten(arr) {
    for (let el of arr) {
      if (typeof el === "number") flatArr.push(el);
      else recursiveFlatten(el);
    }
  }

  recursiveFlatten(arr);

  return flatArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
