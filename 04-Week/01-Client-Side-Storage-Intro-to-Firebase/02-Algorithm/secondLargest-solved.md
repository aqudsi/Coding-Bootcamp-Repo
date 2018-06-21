# Monday Algorithm - secondLargest

### Solution 1
```
function secondLargest(arr) {
    //Check to make sure there is a second value to compare it to
    if (arr[1]) {
        //Set largest to first number in array
        var largest = arr[0]
        //Set second largest to second number in array
        var second = arr[1]
        //Run through the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > second && arr[i] < largest) {
              //Check to make sure that arr[i] value is both greater then the second and less then the largest;
              //Set that value to second if it is
                second = arr[i]
            } else if (arr[i] > largest) {
              //Check to make sure the arr[i] value is not greater then the largest
              //Set that value to largest and the largest value to second if it is
                second = largest
                largest = arr[i]
            }
        }
        //return the second largest value
        return second
    } else {
      //return null if there is no second value in the array (as there is no second largest)
        return null
    }
}
```
