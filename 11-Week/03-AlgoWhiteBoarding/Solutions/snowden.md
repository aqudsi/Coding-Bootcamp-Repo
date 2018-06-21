# Snowden's Solutions

## Solution 1
```js

function nico  (key, message)  {
  var k=[...key].map(x=>[...key].sort().indexOf(x)+1),
      s='',
      i=0;
  while(i<message.length){
       var m=[...message].map((x,i)=>[x,k[i%k.length]]).slice(i,i+k.length).sort((a,b)=>a[1]-b[1]),
           g=Array(k.length).fill(' ');
        for(let e of m){
          if(k.includes(e[1])) g[e[1]-1]=e[0]
        }
        s+=g.join('')
        i+=k.length
  }
  return s;
}
```
## Solution 2
```js
x=k=>k.split('').sort().map(c=>k.indexOf(c));r=l=>RegExp(`.{1,${l}}`,'g')
nico=(k,m,u)=>m.replace(r(x(k).length),m=>x(k).map(i=>m[i]==u?' ':m[i]).join(''))
```

## Solution 3
```js
function nico(key, message) {
  const order = Array.from( key, (_,i) => i ).sort( (v,w) => Number(key[v]>key[w]) - Number(key[v]<key[w]) );
  return ( message + " ".repeat(key.length-1) ).match( new RegExp( `.{${key.length}}`, "g" ) ).map( s => order.map( i => s[i] ).join("") ).join("");
}
```

## Solution 4
```js
function nico(key, msg) {
  var seq = key.split('').map(function(a, b) {
    return a + '~' + b;
  }).sort().map(function(a) { return a.slice(2); });

  while (msg.length % key.length != 0) msg += ' ';

  return msg.match(new RegExp('.{' + key.length + '}', 'g')).map(function(a) {
    for (var res = '', i = 0; i < seq.length; i++) {
      res += a[seq[i]];
    }
    return res;
  }).join('');
}
```
