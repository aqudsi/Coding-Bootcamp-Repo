# Mahdia's Solutions

## Solution 1
```js
function countArara(n) {
  switch (n) {
    case 0:  return '';
    case 1:  return 'anane';
    case 2:  return 'adak';
    default: return 'adak ' + countArara(n-2);
  }
}
```

## Solution 2
```js
function countArara(n) {
    var count = [];
    for (var i = 2; i <= n; i+=2) {
      count.push("adak");
    }
    if (n % 2 != 0) { count.push("anane"); }

    return count.join(" ");
}
```

## Solution 3
```js
var one = "anane";
var two = "adak";

function countArara(n) {
 if(n==1) return one;
 else if(n==2) return two;
 else return two + " " + countArara(n-2);
}
```
