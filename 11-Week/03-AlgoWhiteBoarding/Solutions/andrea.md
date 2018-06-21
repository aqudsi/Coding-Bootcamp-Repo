# Andrea's Solutions

## Solution 1
```js
function isTriangle(a,b,c) {
   arr = [a,b,c].sort((x,y) => x-y)
   return (arr[0]+arr[1]) > arr[2]
}
```

## Solution 2
```js
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}
```

## Solution 3
```js
function isTriangle(a,b,c) {
  if(a > 0 && b > 0 && c > 0) {
    if(a < b + c && b < a + c && c < a + b) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
   return false;
  }
}
```
