# Eli's Solutions

## Solution 1
```js
function foldTo(d, p=0.0001, c=0) {
  if (d<=0) { return null }
  return p >= d ? c : foldTo(d, p*2, c+1)
}
```

## Solution 2
```js
function foldTo(distance) {
  if(distance <= 0){return null}
  var length = 0.0001;
  var folds = 0;
  while(length <= distance){
    length *= 2;
    folds++;
  }
  return folds;
}
```

## Solution 3
```js
function foldTo(distance) {
  var arr = [0.0001];

  if (distance <= 0){
    return null;
  }

  for (var i = 0; i < arr.length; i++){
    if (distance < arr[i]){
    return i;
    }else{
      arr.push(arr[i]*2);
    }

  }

}
```
