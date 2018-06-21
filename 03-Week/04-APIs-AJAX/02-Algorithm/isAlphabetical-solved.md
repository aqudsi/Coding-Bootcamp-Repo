## Thursday Algorithm - isAlphabetical

### Solution 1
```
function isAlphabetical(str) {
    var check = str.toLowerCase()
    for (let i = 0; i < check.length; i++) {
        if (check[i] == "a" || check[i] == "e" || check[i] == "i" || check[i] == "o" || check[i] == "u" || check[i] == "y"){
          if(val){
            if(val <= check[i]){
              val = check[i]
              continue
            } else{
              return false
            }
          } else{
            val = check[i]
          }
        }
    }
  return true
}

console.log(isAlphabetical('arseniously'))
console.log(isAlphabetical('bride'))
```

### Solution 2
```
function isAlphabetical(str) {
    var check = str.toLowerCase()
    var checkArr = []
    for (let i = 0; i < check.length; i++) {
        if (check[i] == "a" || check[i] == "e" || check[i] == "i" || check[i] == "o" || check[i] == "u" || check[i] == "y"){
          checkArr.push(check[i])
        }
    }
    for (let i = 0; i<checkArr.length-1; i++){
      if (checkArr[i] <= checkArr[i + 1]) {
        continue
      } else {
        return false
      }
    }
    return true
}

console.log(isAlphabetical('arseniously'))
console.log(isAlphabetical('bride'))
```

### Which solution is more efficient? Why?
