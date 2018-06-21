# Will's Solutions

## Solution 1
```js
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}
```

## Solution 2
```js
function whoseMove(lastPlayer, win) {
  if (lastPlayer === 'black' && win === true) {
    return 'black';
  } else if (lastPlayer === 'black' && win === false) {
    return 'white';
  } else if (lastPlayer === 'white' && win === true) {
    return 'white';
  } else {
    return 'black';
  }
}
```

## Solution 3
```js
function whoseMove(lastPlayer, win) {
  if((lastPlayer === "white" && win===true) || (lastPlayer === "black" && win === false)) {
  return "white";
  } else {
    return "black";
  }
}
```
