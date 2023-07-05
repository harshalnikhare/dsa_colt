function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  let upperWord = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [upperWord].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
