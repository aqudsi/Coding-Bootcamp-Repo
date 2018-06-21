# Aaron's Question

Your task (if you choose to accept it), is to fix your bosses mistake. He decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. Write a function `stringClean()` to remove all numberic characters, and return a string with spacing and special characters `~#$%^&!@*():;"'.,?` all intact.

For example:
```js
stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
```

Set up:
```js
function stringClean(string) {

}
```
