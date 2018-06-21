# Monday Algorithm - isIsomorphic

### Solution 1

```javascript
function isIsomorphic(firstString, secondString) {

  // Check if the same lenght. If not, they cannot be isomorphic
  if (firstString.length !== secondString.length) return false

  var letterMap = {};

  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
        letterB = secondString[i];

    // If the letter does not exist, create a map and map it to the value
    // of the second letter
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // Eles if letterA already exists in the map, but it does not map to
      // letterB, that means that A is mapping to more than one letter.
      return false;
    }
  }
  // If after iterating through and conditions are satisfied, return true.
  // They are isomorphic
  return true;
}
```

### Solution 2(Courtesy of Snowden)

```javascript
function isIsomorphic(str1, str2){
  var strMap = {};
  for(var i = 0; i < str1.length; i++){
    if(strMap[str1[i]] !== undefined && strMap[str1[i]] !== str2[i]){
      return false;
    }
    strMap[str1[i]] = str2[i]
  }
  return true;
}

console.log(isIsomorphic("kick" ,"side"));
```
