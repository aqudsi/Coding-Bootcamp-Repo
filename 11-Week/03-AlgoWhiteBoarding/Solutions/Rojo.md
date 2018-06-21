# Rojo's Solutions

## Solution 1
```js
function diagonalSum(matrix) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
    }
    return mainSum;
}
```

## Solution 2
```js
function diagonalSum(matrix) {
  return matrix.reduce(function(s, a, i) {
    return s + a[i]
  }, 0)
}
```

## Solution 3
```js
function diagonalSum(m){
  c=0; for (i=0;i<m.length;i++) c+=m[i][i]; return c
}
```
