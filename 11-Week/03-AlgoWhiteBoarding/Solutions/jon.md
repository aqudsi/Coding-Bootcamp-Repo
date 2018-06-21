# Jon's Solutions

## Solution 1
```js
function spiralize(size) {
  if (size == 2) return [ [1,1], [0,1] ];
  if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
  var base = spiralize(size-2);
  var res = [[],[]];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size-1] = 1;
  for (var i = size-3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0,1]));
  }
  res[size-1][size-2] = 1;
  return res;
}
```

## Solution 2
```js
// Every direction change, we fill in two less cells
var spiralize = function(size) {
  var matrix = createMatrix(size),
      x = 0,
      // Start on the top right
      y = size - 1,
      count = size - 1,
      direction = 'down',
      numOfDirectionSwitchs = 0,
      moves = 0;

  while (count > 0) {
    switch (direction) {
      case 'down':
        x++;
        fillCell('left');
        break;
      case 'left':
        y--;
        fillCell('up');
        break;
      case 'up':
        x--;
        fillCell('right');
        break;
      case 'right':
        y++;
        fillCell('down');
        break;
    }
  }

  return matrix;

  function fillCell(nextDirection) {
    moves++;
    matrix[x][y] = 1;
    if (moves === count) {
      if (moves === 1) {
        count = 0;
      }

      moves = 0;
      direction = nextDirection;
      numOfDirectionSwitchs++;

      if (numOfDirectionSwitchs !== 0 && numOfDirectionSwitchs % 2 === 0) {
        count -= 2;
      }
    }
  }
}

function createMatrix(size) {
  var matrix = [],
      firstRow = true;

  for (var i = 0; i < size; i++) {
    matrix.push(new Array(size + 1).join(firstRow ? '1' : '0').split('').map(parseFloat));
    firstRow = false;
  }

  return matrix;
}
```

## Solution 3
```js
/*
*  Recursive solution based on the fact that
*    
*  spiral(n)    Borders-1    spiral(n-2) with token inverted
*  00000         00000  
*  ....0         .XXX0        ...
*  000.0     =    0XXX0     +  0X.    +    etc    
*  0...0         0XXX0        ...
*  00000         00000  
*  
*  s      - Size
*  m      - Token of the outmost border
*  t(b,n) - Array(n), full of b's
*/

var spiralize = function(s, m) {
  m == undefined && (m = 1);                                                            // Default token 1 (first row always 1)
  return s < 3
          ? [[m],[[m,m],[+!m,m]]][s-1]                                                  // Stopping criteria
          : [t(m, s)].concat(spiralize(s-2, +!m, 1)
                             .map(function(i, idx) {                                    // Build rows 1 .. s-1
                                return [(idx == 0 ? +!m : m)].concat(i).concat([m]);    // Invert token on line 2
                              }))                                                       // (line 1 of the enclosed square)
                     .concat([t(m, s)]);

  function t(b, n) {
    return new Array(n+1).join(b).split('').map(function (i){ return parseInt(i); });
  }
}
```
