function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.length === 2) return str[0] === str[1];
  else if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

console.log(isPalindrome("alaba"));
console.log(isPalindrome("atlta"));
