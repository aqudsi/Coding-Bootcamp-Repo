# Christin's Solutions

## Solution 1
```js
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min

    return [min, max, diff]
}
```

## Solution 2
```js
function differenceInAges(ages) {
  let [min, max] = [Infinity, -Infinity];
  for (const age of ages) {
    if (age < min) min = age;
    if (age > max) max = age;
  }
  return [min, max, max - min];
}
```

## Solution 3
```js
function differenceInAges(ages) {
  var sortAges = ages.sort(function(a, b) {
    return a - b;
  });
  var answer = [sortAges[0], sortAges[sortAges.length-1], (sortAges[sortAges.length-1] - sortAges[0])]
  return answer;
}
```
