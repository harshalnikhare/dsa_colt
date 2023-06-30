function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  for (let num of arr1) {
    counter1[num] = (counter1[num] || 0) + 1;
  }
  console.log({ counter1 });

  let counter2 = {};
  for (let num of arr2) {
    counter2[num] = (counter2[num] || 0) + 1;
  }
  console.log({ counter2 });

  for (let num in counter1) {
    if (!(num ** 2 in counter2)) {
      return false;
    }
    if (counter1[num] !== counter2[num ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 4, 4, 1, 11]));
