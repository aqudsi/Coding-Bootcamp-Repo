# James's Solutions

## Solution 1
```js
function alphabetWar(str) {
  const arr = str.replace(/(?:.)?\*+.?/g, '').split('');
  const [ left, right ] = arr
    .reduce((acc,curr) => {
      acc[0] += { w: 4, p: 3, b: 2, s: 1 }[curr] || 0;
      acc[1] += { m: 4, q: 3, d: 2, z: 1 }[curr] || 0;
      return acc;
    }, [ 0, 0 ]);

  return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : 'Let\'s fight again!';
}
```

## Solution 2
```js
const d = {'w':4,'p':3,'b':2,'s':1,'m':-4,'q':-3,'d':-2,'z':-1}

function alphabetWar(fight) {
  const r = fight.replace(/.?\*+.?/g, '')
                 .split('')
                 .map(e=>d[e]!=undefined ? d[e] : 0)
                 .reduce((x,y)=>x+y,0)

  return {[r==0]: "Let's fight again!",
          [r>0] : "Left side wins!",
          [r<0] : "Right side wins!"
          }[true]
}     
```

## Solution 3
```js
function alphabetWar(fight) {
  var array = fight.split("");
  var left = 0;
  var right = 0;
  for(var i=0;i<array.length;i++){
    if(array[i-1] === "*" || array[i+1] === "*"){
    }
    else{
      switch (array[i]){
        case "w": left+=4;
                  break;
        case "p": left+=3;
                  break;
        case "b": left+=2;
                  break;
        case "s": left++;
                  break;
        case "m": right+=4;
                  break;
        case "q": right+=3;
                  break;
        case "d": right+=2;
                  break;
        case "z": right++;
                  break;
      }
    }
  }
  if (left === right) {
    return "Let's fight again!";
  }
  else if(left>right) {
    return "Left side wins!";
  }
  else {
    return "Right side wins!";
  }

}
```
