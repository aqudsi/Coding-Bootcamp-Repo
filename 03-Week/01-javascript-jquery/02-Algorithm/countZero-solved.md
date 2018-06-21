## Monday Algorithm - countZero

### Solution 1
```
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}

console.log(countZero(2014))
  =223
```
