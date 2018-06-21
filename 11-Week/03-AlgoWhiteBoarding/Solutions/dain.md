# Dain's Solutions

## Solution 1
```js
var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",'twelve','thirteen','fourteen','fifteen', 'sixteen','seventeen', 'eighteen','nineteen','twenty'];

class Arith{
  constructor(num){
    this.number = numbers.indexOf(num);
  }

  add(num){
    return numbers[this.number + numbers.indexOf(num)];
  }
}
```

## Solution 2
```js
class Arith {

  constructor(word) {
    this.value = Arith.terms.indexOf(word);
  }

  add(word) {
    return Arith.terms[this.value + Arith.terms.indexOf(word)];
  }

  static get terms() {
    return [
      'zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
    ];
  }

}
```

## Solution 3
```js
nums = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];

function arith(first){this.first = first;}

arith.prototype.add = function(second){ return nums[nums.indexOf(this.first) + nums.indexOf(second)];}
```
