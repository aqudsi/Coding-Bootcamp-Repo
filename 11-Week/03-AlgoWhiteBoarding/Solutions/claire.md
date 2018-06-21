# Claire's Solutions

## Solution 1
```js
function longestVowel(s){
  return Math.max(...(s.match(/[aeiou]+/g)||['']).map(e=>e.length))
}
```

## Solution 2
```js
const longestVowel = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
```

## Solution 3
```js
function longestVowel(s){
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  let highestCount = 0;
  for (let i = 0; i < s.length -1; i++) {
    if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
      count++;
    } else {
      if (highestCount < count) highestCount = count;
      count = 1;
    }
  }
  return highestCount;
}
```
