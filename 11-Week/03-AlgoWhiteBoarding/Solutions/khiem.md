# Khiem's Solutions

## Solution 1
```js
function climb(n) {
  var res = [n];

  while (n > 1) {
    n = Math.floor(n / 2);
    res.push(n)
  }

  return res.reverse();
}
```

## Solution 2
```js
function climb(n){
  var results = [];

  if(n === 1) {
    results.push(n);
  }

  else {
    return climb(Math.floor(n / 2)).concat(n);
  }

  return results;
};
```

## Solution 3
```js
function climb (n) {
  let total = [];
  while (n >= 1) {
    total.unshift(n);
    n = Math.floor(n/2);
  }
  return total;
}
```
