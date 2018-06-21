# Anastasia's Solutions

## Solution 1
```js
function faultyOdometer(n) {
  var deducts = {1: 0, 10: 1, 100: 19, 1000: 271, 10000: 3439, 100000: 40951,
        1000000: 468559, 10000000: 5217031, 100000000: 56953279,
        1000000000: 612579511}
  var deduct = 0;
  var digits = n.toString().split("").map(s => parseInt(s));
  for (var i = 0; i < digits.length; i++) {
    let digit = digits[i];
    let key = Math.pow(10, digits.length - i - 1);
    var multiply = deducts[key];
    var newDeduct = digit < 4 ? digit * multiply : (digit -1) * multiply + key;
    deduct = deduct + newDeduct;
  }
  return n - deduct;
}
```

## Solution 2
```js
function faultyOdometer(n) {
  var c=0;
  var m=n+"";
  for(var i=0;i<m.length;i++)
  {
    if(m[i]*1<4)
      c+=m[i]*Math.pow(9, m.length-1-i);
    else if(m[i]*1>4)
      c+=(m[i]-1)*Math.pow(9, m.length-1-i);
  }
  return c;
}
```

## Solution 3
```js
function faultyOdometer(n) {
  return n?n%10-(n%10>4)+9*faultyOdometer(n/10|0):0
}
```
