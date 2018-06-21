# Friday Algorithm - lastDigit

## Solution 1

```javascript
var lastDigit = function(str1, str2){
  let key = [0,0,0,0, 1,1,1,1, 6,2,4,8, 1,3,9,7, 6,4,6,4, 5,5,5,5, 6,6,6,6, 1,7,9,3, 6,8,4,2, 1,9,1,9];
  let i = +str1.slice(-1);
  let j = str2.slice(-2) % 4;
  if (str2 == '0') return 1;
  return key[4*i+j];
}
```

## Solution 2

```javascript
var lastDigit = function(str1, str2){  
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}
```

### What is the code above doing?

#### let's have this in steps:
* `str2` is a string but contains a number.
* `+str2` converts that string to a number.
* `!+str2` converts that number to a boolean and inverts. This way it becomes either false if non-zero or true if zero.
* `+!+str2` converts that boolean back to a number, now we have either `0` or `1`.
* So this `+!+str2 `is just a way to put "give me 0 if str2 is not "0", otherwise give me 1".
