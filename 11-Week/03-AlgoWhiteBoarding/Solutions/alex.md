# Alex's Solutions

## Solution 1
```js
function flattenAndSort(array) {
  var newArray = [];
  for(var i =0;i<array.length;i++)
  {
    for(var j=0;j<array[i].length;j++)
    {
      newArray.push(array[i][j]);
    }
  }

  return newArray.sort((a,b) =>  a-b);
}
```

## Solution 2
```js
function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b)
    ;
}
```

## Solution 3
```js
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}
```
