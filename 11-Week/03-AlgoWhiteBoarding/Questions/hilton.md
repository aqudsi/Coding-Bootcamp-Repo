# Hilton's Question
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how much keystrokes you have to do for a specific word.

Your task (if you choose to accept it), is to Write a function that returns the amount of keystrokes of input str.

Keyboard Layout:
```js
{
  `1` : `1`
  `2` : `2abc`
  `3` : `3def`
  `4` : `4ghi`
  `5` : `5jkl`
  `6` : `6mno`
  `7` : `7pqrs`
  `8` : `8tuv`
  `9` : `9wxyz`
  `0` : `0`
  `*` : `*`
  `#` : `#`
}
```

For example:
```js
mobileKeyboard("123") => 3 //(1+1+1)
mobileKeyboard("abc") => 9 //(2+3+4)
mobileKeyboard("codewars") => 26 //(4+4+2+3+2+2+4+5)
```

Setup:
```js
function mobileKeyboard(str){

}
```
#### Note:
- Only letters, digits and special characters in lowercase included in layout without whitespaces
