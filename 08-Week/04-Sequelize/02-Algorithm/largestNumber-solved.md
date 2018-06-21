# Thursday Algorithm - largestNumber

## Solution 1

```javascript
function largestNumber(digits) {
  if(digits.length <= 5){
    return digits
  }
  var num = 0;
  for (i=0; i<= (digits.length-5); i++) {
    temp = +digits.slice(i,i+5)
    if (temp > num) num = temp;
  }
  return num;
}
```

## Solution 2

```javascript
function largestNumber(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), largestNumber(digits.substr(1)));
}
```

## Solution 3 (Courtesy of Jon)

```javascript
var largestNumber = function(number, numDigits) {

	var large = 0;

	for (var i = 0; i < number.length - numDigits; i++) {

		var tempInt = parseInt(number.substr(i, numDigits));
		if (large < tempInt) large = tempInt;
	}

	return large;

}

console.log(largestNumber('982331092849022992999998', 5));
```
