# Aaron's Solutions

## Solution 1
```js
function stringClean(s){
  return s.replace(/\d/g, "");
}
```

## Solution 2
```js
function stringClean(s){
  var newStr = "";
  var num = '1234567890';

  for (var i = 0; i < s.length; i++) {
    if (!(num.includes(s[i]))) {
      newStr += s[i];
    }    
  }
  return newStr;
}
```

## Solution 3
```js
function stringClean(s){
  return s.replace(/[0-9]/g, '');
}
```
