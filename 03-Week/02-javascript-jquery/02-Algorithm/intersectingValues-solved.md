## Tuesday Algorithm - intersectingValues

### Solution 1
```
function intersectingValues(arr1, arr2){
  var length1 = arr1.length;
  var length2 = arr2.length;
  var i = 0;
  var j = 0;
  var intersecting = [];
  //Want to continue while both arr1 or arr2 have a value at the index
  while(i < length1 && j < length2){
    if(arr1[i] === arr2[j]) {
      intersecting.push(arr1[i]);
      i++;
      j++;
    }
    //if first arrays values at index i is greater then the value of the second arrays index of j you want to increase the second arrays index
    else if(arr1[i] > arr2[j]){
      j++;
    }
    //if second arrays values at index j is greater then the value of the first arrays index of i you want to increase the second arrays index
    else{
      i++;
    }
  }
  return intersecting;
}

arr1 = [1,2,3,4,5,6,9,19,33];
arr2 = [1,4,9,19,22];

console.log(intersectingValues(arr1, arr2));
```

### Solution 2 (Nice work Jon and James)(This works even on non-sorted arrays)
```
function intersectingValues(arr1,arr2){
  var matches = [];
  for(var i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) > -1) {
        matches.push(arr2[i]);
    }
  }
  return matches;
}

arr1 = [1,2,3,4,5,6,9,19,33];
arr2 = [1,4,9,19,22];

console.log(intersectingValues(arr1, arr2));
```
