# Eli's Question
Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of `0.0001m`.

Given `distance` in units of meters, your task (if you choose to accept it), is to calculate how many times you have to fold the paper to make the paper reach this distance.

For example:
```js
foldTo(384000000) => 42
```

Setup:
```js
function foldTo(n) {

}
```
#### Note:
- You can't do half a fold. Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null.
