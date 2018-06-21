# Aimila's Solutions

## Solution 1
```js
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
```

## Solution 2
```js
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}
```

## Solution 3
```js
function descendingOrder(n){
  var length = n.toString().length;
  var userString = n.toString();
  var changed = true;
  while (changed) {
    changed = false;
    for (var i = 0; i < length - 1; i++) {
      if (userString[i] < userString[i+1]) {
        userString = userString.substring(0, i) + userString[i+1] + userString[i] + userString.substring(i + 2, length);
        changed = true;
      }
    }
  }
  return parseInt(userString);
}
```
