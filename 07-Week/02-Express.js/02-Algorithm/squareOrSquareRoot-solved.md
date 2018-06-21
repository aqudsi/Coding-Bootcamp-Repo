# Tuesday Algorithm - squareOrSquareRoot

### Solution 1

```JavaScript
function squareOrSquareRoot(array) {
  var processed = [];

  for (var i=0; i<array.length; i++){
    var number = array[i];

    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))){
      processed.push(Math.sqrt(number));
    }
    else {
      processed.push(number*number);
    }

  }
  return processed;
}
```
