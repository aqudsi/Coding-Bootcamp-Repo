# Drea's Solutions

## Solution 1
```js
function totalBill(str) {
  var count = 0;

  for (var i=0; i<str.length; i++){
    if (str[i] === "r"){
      count++;
    }
  }
  var total = count * 2;
  var discount = (Math.floor(count/5))*2;

  return total - discount;
}
```

## Solution 2
```js
function totalBill(str) {
  return str.replace(/ /g, "").replace(/r{5}/g, 'rrrr').length * 2;
}
```

## Solution 3
```js
function totalBill(str) {
  let total = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i] === 'r') total++;
  }
  return Math.floor(total/5) * 8 + (total % 5 * 2);
}
```
