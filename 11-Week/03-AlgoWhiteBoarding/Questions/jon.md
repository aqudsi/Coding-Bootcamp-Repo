# Jon's Question

Your task (if you choose to accept it), is to create a NxN spiral with a give `size`

For example, spiral with size 5 should look like this:
```
00000
....0
000.0
0...0
00000
```

and with the size of 10:
```
0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
```

Setup:
```js
function spiralize(size) {

}
```

Return value should contain array of arrays, of `0` and `1`, for example for given size `5` result should be:
```js
[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
```

#### Note:
- Because of the edge-cases for tiny spirals, the size will be at least 5
