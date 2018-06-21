# Friday Algorithm - removeShorterStrings

### Solution 1 (No Built in functions(one `.length()`))
```
function removeShorterStrings(array, length){
  // Used to count number of items less then length
  var shortCount = 0
  //used to count the number of items in the array
  var arrayIndexCount = 0;
  var i = 0;
  //Run while index of array exists
  while(array[i]){
    arrayIndexCount++;
    i++;
  }
  //For loop to run through the array length
  for(i=0; i<arrayIndexCount; i++){
    var wordLength = 0;
    var j = 0;
    //Get the length of each string in the array
    while(array[i][j]){
      wordLength++;
      j++;
    }
    //only run if wordLength is less then the given length
    if(wordLength<length){
      shortCount++
      //move the values behind it forward to overwrite the short value
      for(let k = i; k<arrayIndexCount-1; k++){
        array[k] = array[k+1]
      }
      //Since we removed the value we need to recheck the array[i]
      i--
    }
  }
  //only run if there is a element shorter then the given length
  if(shortCount != 0){
    //change our length so it slices off the added elements at the back of the array
    array.length = array.length - shortCount
  }
  return(array)
}
array = ['blue','green','yellow','harry potter', 'william shakespeare', 'donald duck']
console.log(removeShorterStrings(array, 6))
```

### Solution 2 (Using Built in `.length()`)
```
function removeShorterStrings(array, length){
  // Used to count number of items less then length
  var shortCount = 0
  //For loop to run through the array length
  for(var i=0; i < array.length-1; i++){
    if(array[i].length < length){
      shortCount++
      //move the values behind it forward to overwrite the short value
      for(let k = i; k<array.length-1; k++){
        array[k] = array[k+1]
      }
      //Since we removed the value we need to recheck the array[i]
      i--
    }
  }
  //only run if there is a element shorter then the given length
  if(shortCount != 0){
    //change our length so it slices off the added elements at the back of the array
    array.length = array.length - shortCount
  }
  return(array)
}
array = ['blue','green','yellow','harry potter', 'william shakespeare', 'donald duck']
console.log(removeShorterStrings(array, 6))
```

### Solution 3 (Using Built in `.pop()`)
```
function removeShorterStrings(array, length){
  // Used to count number of items less then length
  var shortCount = 0
  //used to count the number of items in the array
  var arrayIndexCount = 0;
  var i = 0;
  //Run while index of array exists
  while(array[i]){
    arrayIndexCount++;
    i++;
  }
  //For loop to run through the array length
  for(i=0; i<arrayIndexCount; i++){
    var wordLength = 0;
    var j = 0;
    //Get the length of each string in the array
    while(array[i][j]){
      wordLength++;
      j++;
    }
    //only run if wordLength is less then the given length
    if(wordLength<length){
      shortCount++
      //move the values behind it forward to overwrite the short value
      for(let k = i; k<arrayIndexCount-1; k++){
        array[k] = array[k+1]
      }
      //Since we removed the value we need to recheck the array[i]
      i--
    }
  }
  //only run if there is a element shorter then the given length
  if(shortCount != 0){
    //remove the value from the back of the array based on the number of short counts we got
    for(let i=0; i<shortCount;i++){
      array.pop()
    }
  }
  return(array)
}

array = ['blue','green','yellow','harry potter', 'william shakespeare', 'donald duck']
console.log(removeShorterStrings(array, 6))
```

### Solution 4 (Using All Built in Functions)
```
function removeShorterStrings(array, length){
  // Used to count number of items less then length
  var shortCount = 0
  //For loop to run through the array length
  for(var i=0; i < array.length-1; i++){
    if(array[i].length < length){
      shortCount++
      //move the values behind it forward to overwrite the short value
      for(let k = i; k<array.length-1; k++){
        array[k] = array[k+1]
      }
      //Since we removed the value we need to recheck the array[i]
      i--
    }
  }
  //only run if there is a element shorter then the given length
  if(shortCount != 0){
    //remove the value from the back of the array based on the number of short counts we got
    for(let i=0; i<shortCount;i++){
      array.pop()
    }
  }
  return(array)
}

array = ['blue','green','yellow','harry potter', 'william shakespeare', 'donald duck']
console.log(removeShorterStrings(array, 6))
```

## Which is the most efficient? Why?
