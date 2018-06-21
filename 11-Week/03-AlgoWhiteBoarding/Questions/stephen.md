# Stephen's Question

Your task (if you choose to accept it), is given a "square" array of subarrays, to find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on....

Once upon a time, on a way through the old wild west, a man was given directions to go from one point to another. The directions were `"NORTH", "SOUTH", "WEST", "EAST"``. Clearly `"NORTH" and "SOUTH"` are opposite, `"WEST" and "EAST"` too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

For example:
```js
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
```

Set up:
```js
function dirReduc(array) {

}
```

#### Note:
- Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself: `["NORTH", "WEST", "SOUTH", "EAST"]`.
