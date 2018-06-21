## Friday Algorithm - isPalindrome

### Solution 1
```
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

console.log(madam, isPalindrome('madam'))
console.log(toyota, isPalindrome('toyota'))
```

### Solution 2
```
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

console.log(madam, checkPalindrome('madam'))
console.log(toyota, checkPalindrome('toyota'))
```
