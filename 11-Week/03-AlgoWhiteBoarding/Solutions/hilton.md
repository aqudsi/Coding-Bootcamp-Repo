# Hilton's Solutions

## Solution 1
```js
function mobileKeyboard(str){
  var keyboard = {
    "*":1,
    "#":1,
    "1":1,
    "2":1,
    "3":1,
    "4":1,
    "5":1,
    "6":1,
    "7":1,
    "8":1,
    "9":1,
    "0":1,
    "a":2,
    "b":3,
    "c":4,
    "d":2,
    "e":3,
    "f":4,
    "g":2,
    "h":3,
    "i":4,
    "j":2,
    "k":3,
    "l":4,
    "m":2,
    "n":3,
    "o":4,
    "p":2,
    "q":3,
    "r":4,
    "s":5,
    "t":2,
    "u":3,
    "v":4,
    "w":2,
    "x":3,
    "y":4,
    "z":5
  }
  var answer = 0;
  let strArr = str.split("");

  for(var i = 0; i < str.length;i++){
    for(var key in keyboard){
      if(str[i] === key){
        answer += keyboard[key]
      }
     }
  }
  return answer;
}
```

## Solution 2
```js
function mobileKeyboard(str){
  let arr = str.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] ==='a' || arr[i] ==='d' || arr[i] ==='g'|| arr[i] ==='j'||arr[i] ==='m'||arr[i] ==='p'||arr[i] ==='t'||arr[i] ==='w') {
      sum += 2;
    } else if(arr[i] ==='b' || arr[i] ==='e' || arr[i] ==='h'|| arr[i] ==='k'||arr[i] ==='n'||arr[i] ==='q'||arr[i] ==='u'||arr[i] ==='x'){
      sum += 3;
    } else if (arr[i] ==='c' || arr[i] ==='f' || arr[i] ==='i'|| arr[i] ==='l'||arr[i] ==='o'||arr[i] ==='r'||arr[i] ==='v'||arr[i] ==='y'){
      sum += 4;
    } else if (arr[i] ==='s' || arr[i] ==='z') {
      sum += 5;
    } else {
      sum += 1;
    }
  }
  return sum;
}
```

## Solution 3
```js
function mobileKeyboard(str){
  const lookup = ['1234567890*#', 'adgjmptw', 'behknqux', 'cfilorvy', 'sz']
  let count = 0;
  for (var i in str){
      count += lookup.findIndex((pattern)=> pattern.indexOf(str[i]) !== -1) + 1;
  }
  return count;
}
```
