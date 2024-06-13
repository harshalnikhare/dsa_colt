function capitalizeFirst(arr) {
  if (arr.length <= 1) return arr[0][0].toUpperCase() + arr[0].slice(1);

  const upperWord = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [upperWord].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["test", "what", "do"]));
