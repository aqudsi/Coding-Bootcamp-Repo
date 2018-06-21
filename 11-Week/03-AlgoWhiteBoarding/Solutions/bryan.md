# Bryan's Solutions

## Solution 1
```js
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
```

## Solution 2
```js
function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}
```

## Solution 3
```js
function isValidIP(str) {
  str = str.split('.')
  if (str.length !== 4){ return false };
  for (var i in str){
    if (!octetCheck.test(str[i])){return false};
  }  
  return true;  
}
```
