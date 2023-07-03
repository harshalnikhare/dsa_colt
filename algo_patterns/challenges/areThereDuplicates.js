// time: O(n), space: O(n)
// function areThereDuplicates(...args) {
//   let freq = {};
//   for (let arg of args) {
//     freq[arg] ? freq[arg]++ : (freq[arg] = 1);
//   }
//
//   for (let val in freq) {
//     if (freq[val] > 1) return true;
//   }
//   return false;
// }

// time: O(nlogn), space: O(1), only applicable for numbers and strings
// function areThereDuplicates(...args) {
//   if (typeof args[0] === "number") {
//     args.sort((a, b) => a - b);
//   } else if (typeof args[0] === "string") {
//     args.sort();
//   }
//
//   for (let i = 0; i < args.length - 1; i++) {
//     if (args[i] === args[i + 1]) return true;
//   }
//   return false;
// }

// oneliner
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates("a", "b", "c", "d", "e", "f", "a")); // true
