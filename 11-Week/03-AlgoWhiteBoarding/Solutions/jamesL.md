# James's Solutions

## Solution 1
```js
function sum(n1, n2) {
  return (parseInt(n1) || 0) + (parseInt(n2) || 0);
}

function sumStrings(a,b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  total = [];
  var length = (a.length > b.length) ? a.length : b.length;

  //make the sum digit by digit
  for (var i = 0; i < length; i++) {
    s = sum(a[i], b[i]);
    total[i] = sum(total[i], s);
    if (total[i]>9) {
      total[i] -= 10;
      total[i+1] = 1;
    }
  }

  //remove fruitless zero
  if (total[total.length-1] == 0)
    total[total.length-1] = "";

  //reverse the array and return the string
  return total.reverse().join("");
}
```

## Solution 2
```js
function sumStrings(a,b) {

  a = make(a); b = make(b)
  var res = []; var r = 0

  for (var i=0; i<Math.max(a.length,b.length); i++){
    const x = Number(a[i] || 0)
    const y = Number(b[i] || 0)
    x+y+r < 10 ? (res.push(x+y+r), r=0) : (res.push((x+y+r)-10), r=1)
  }

  r == 1 ? res.push(r) : undefined
  return res.reverse().map(e=>String(e)).join('')
}

const make = (num) => num.replace(/^0+/, '').split('').reverse()
```

## Solution 3
```js
function sumStrings(a,b) {
  var res="",c=0;
  a=a.split("");b=b.split("");
  while(a.length||b.length||c){
    c=+(a.length>0?a.pop():0) + +(b.length>0?b.pop():0)+c;
    res=(c%10).toString()+res;
    c=Math.floor(c/10);
  }
  res=res.replace(/^[0]*/g,"");
  return res;
}
```
