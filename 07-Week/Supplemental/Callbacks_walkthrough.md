# Callbacks

##### A `setTimeout` function takes in a callback and is one of the simplest to understand, the function that runs inside `setTimeout` is actually a callback function

### [Demo 1](https://jsfiddle.net/hermanj13/z9z5ra68/2/)

```JavaScript
document.getElementById('output').innerHTML += ('starting ...');
document.getElementById('output').innerHTML += ('continuing ...');
document.getElementById('output').innerHTML += ('ending!');
```

### [Demo 2](https://jsfiddle.net/hermanj13/88e2c2g6/)

```JavaScript
document.getElementById('output').innerHTML += ('starting ...');
document.getElementById('output').innerHTML += ('ending!');
document.getElementById('output').innerHTML += ('continuing ...');
```
### Anonymized Callback

### [Demo 3](https://jsfiddle.net/hermanj13/335po559/)

```JavaScript
var myTimer = window.setTimeout(function() {
    document.getElementById('output').innerHTML += ('ending!');
}, 500);
```

### Named Callback


### [Demo 4](https://jsfiddle.net/hermanj13/8o9nfm56/)

```JavaScript
document.getElementById('output').innerHTML += ('starting ...');

// Wait half a second before firing the writeEnding() function
var myTimer = window.setTimeout(writeEnding, 500);
document.getElementById('output').innerHTML += ('continuing ...');

// Define the Write Ending Function
function writeEnding() {
    // Write "ending!"
    document.getElementById('output').innerHTML += ('ending!');
}
```

## Data Callback

#### What's wrong with this one?

### [Demo 5](https://jsfiddle.net/cwbuecheler/upQuM/)

```JavaScript
getData('http://fakedomain1234.com/userlist', writeData);

document.getElementById('output').innerHTML += "show this before data ...";

function getData(dataURI, callback) {
    var dataArray = [123, 456, 789, 012, 345, 678];
    callback(dataArray);
}

function writeData(myData) {
    document.getElementById('output').innerHTML += myData;
}
```

#### Correct Way

### [Demo 6](https://jsfiddle.net/cwbuecheler/Y9Ca8/)

```JavaScript
// Call our main function. Pass it a URI and a callback function
getData('http://fakedomain1234.com/userlist', writeData);

// Write some stuff to the p tag
document.getElementById('output').innerHTML += 'show this before data ...';

// Define our main function
function getData(dataURI, callback) {

    // Normally you would actually connect to a server here.
    // We're just going to simulate a 3-second delay.
    var timer = setTimeout(function () {

      // Here's some data which we're pretending came from dataURI
        var dataArray = [123, 456, 789, 012, 345, 678];

      // run our callback function
        callback(dataArray);

    }, 3000);
}

function writeData(myData) {
    document.getElementById('output').innerHTML += myData;
}
```

### What's the point?

##### Everything Node does is asynchronous. You fire a command, and move on to other commands, and when your first command is finished executing it calls a callback. If you don't code your Node apps this way, you're basically nullifying one of the two biggest advantages Node has (those two being: its async nature, and the fact that it's all JavaScript and thus nearly every single web developer can code for it).

### Jquery Example - Anonymized Callback

### [Demo 7](https://jsfiddle.net/cwbuecheler/YTWdn/)

```JavaScript
$('body').on('click', 'p#output', function() {
    alert('You clicked the output paragraph.');
});
```

### Jquery Example - Named Callback

### [Demo 8](https://jsfiddle.net/hermanj13/vn7u8cbn/4/)

```JavaScript
$('body').on('click', 'p#output', showAlert);

function showAlert() {
    alert('You clicked the output paragraph');
}
```
