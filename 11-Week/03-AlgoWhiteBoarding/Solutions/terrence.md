# Terrence's Solutions

## Solution 1
```js
function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}
```

## Solution 2
```js
function findSum(n) {
  return Array(n+1).fill(null)
                   .map((e,i)=>i)
                   .filter(e=> e % 3 == 0 || e % 5 == 0)
                   .reduce((x,y)=>x+y, 0)
}
```

## Solution 3
```js
function findSum(n) {
  var a = Math.floor(n/3);
  var b = Math.floor(n/5);
  var c = Math.floor(n/15);
  return (3*a*a+3*a+5*b*b+5*b-15*c*c-15*c)/2;
}
```
