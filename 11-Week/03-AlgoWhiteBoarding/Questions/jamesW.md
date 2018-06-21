# James's Question

Your task (if you choose to accept it), is to solve the alphabet war. There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread everywhere on the battlefield.

Write a function that accepts `fight` string consists of only small letters and `*` which means a bomb drop place. Return who wins the fight. When the left side wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.

The left side letters and their power:
```
w - 4
p - 3
b - 2
s - 1
```

The right side letters and their power:
```
m - 4
q - 3
d - 2
z - 1
```

The other letters don't have power and are only victims.
The `*` bombs kills the adjacent letters ( i.e. `aa*aa` => `a___a`, `**aa**` => `______` );

For example:
```js
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!
```

Set up:
```js
function alphabetWar(string) {

}
```
