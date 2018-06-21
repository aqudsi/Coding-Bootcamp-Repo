# Eyob's Solutions

## Solution 1
```js
function caseUnification(str) {
var upper=0;
var lower=0;

for(var i=0;i<str.length;i++) {
    if (str[i]>='a' && str[i]<='z' ) {
      lower++;
    }
    else if( str[i]>='A' && str[i]<='Z') {
      upper++;
    }
}
  return lower > upper ? str.toLowerCase() : str.toUpperCase();
}
```

## Solution 2
```js
function caseUnification(s) {            
  return s.split('')
          .map(c => /[A-Z]/.test(c) ? 1 : -1)
          .reduce((x,y)=>x+y)
          > 0
          ?
          s.toUpperCase() : s.toLowerCase()              
}
```

## Solution 3
```js
function caseUnification(str){
  var uppercase = [];
  var lowercase = [];
  var str1 = str
  var arr = str.split('')
  for (var i = 0; i <arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      uppercase.push(arr[i]);
    } else {
      lowercase.push(arr[i]);
    }
  }
  if(uppercase.length > lowercase.length){
    return str1.toUpperCase();
  }
  return str1.toLowerCase();

}
```
