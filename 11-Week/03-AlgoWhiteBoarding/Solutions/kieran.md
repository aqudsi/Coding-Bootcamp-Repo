# Kieran's Solutions

## Solution 1
```js
function calculate(num1,num2){
   return binaryToDecimal(num1)+binaryToDecimal(num2);
}

function binaryToDecimal(b){
    var arr = b.split('');
    var d = 0;
    for (var i = arr.length, j = 0; i > 0; i--, j++){
       if (arr[i-1] == 1){d += Math.pow(2, j)}
    }
    return d;
}
```

## Solution 2
```js
function calculate(num1,num2){
  return parseInt2(num1) + parseInt2(num2);
}

function parseInt2(num){
  var output=0;
  var count=0;
  var length=num.length-1;
  for(var i=length;i>=0;i--){
    output |= num.charAt(i) << count++;
  }
  return output;
}
```

## Solution 3
```js
function toInt(num) {
  let result = 0;
  let digits = num.length;
  let next = num;
  for(i = 0; i < digits; i++) {
    result += (next % 10) * Math.pow(2, i);
    next = Math.floor(next / 10);
  }
  return result;
}

function calculate(num1,num2){
  return toInt(num1) + toInt(num2);
}
```
