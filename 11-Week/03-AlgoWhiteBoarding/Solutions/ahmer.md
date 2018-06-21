# Ahmer's Solutions

## Solution 1
```js
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }

 return array;
}
```

## Solution 2
```js
function sortArray(array) {
  var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}
```

## Solution 3
```js
function sortArray(array) {
  // create and sort array with all odd numbers
  var odd = array.filter(x => x % 2 !== 0);
  var newArr = odd.sort(function(a,b){
    return a - b;
  });
  // iterate through original array
  // until true that array[x] === even, splice this into odd array at same index
  for (var x = 0; x < array.length; x++) {
    if (array[x] % 2 === 0) {
      newArr.splice(x,0,array[x]);
    }
  }
  return newArr;
}
```
