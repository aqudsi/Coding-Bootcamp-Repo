# Friday Algorithm - lastDigit

### Question

###### lastDigit: Define a function that takes in two numbers `a` and `b` and returns the last decimal digit of `a^b`. Note that `a` and `b` may be very large! For example, the last decimal digit of `9^7` is `9`, since `9^7 = 4782969`. The last decimal digit of ``(2^200)^(2^300)``, which has over `10^92` decimal digits, is `6`. The inputs to your function will always be non-negative integers.

#### Example
  ```javascript
lastDigit("4", "1")             //       4 => 4
lastDigit("4", "2")             //      16 => 6
lastDigit("9", "7")             // 4782969 => 9    
lastDigit("10","10000000000")   //=> 0
  ```

### Setup
```JavaScript
function lastDigit(str1, str2){
  YOUR CODE HERE
}

console.log(lastDigit("9", "7"))
```
