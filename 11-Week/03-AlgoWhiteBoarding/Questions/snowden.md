# Snowden's Question

Your task (if you choose to accept it), is to Write a function `nico/nico()` that accepts two parameters:

+ `key` - string consists of unique letters and digits
+ `message` - string to encode

and encodes the `message` using the `key`.

First create a numeric key basing on a provided `key` by assigning each letter position in which it is located after setting the letters from `key` in an alphabetical order.

For example, for the key `crazy` we will get `23154` because of `acryz` (sorted letters from the key).

Let's encode `secretinformation` using our `crazy` key.

Before key:
```
2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
```

After using the key:
```
1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n
```

Setup:
```js
function nico (key, message)  {
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

#### Note:
- The `message` is never shorter than the `key`.
