# Thursday Algorithm - ticketClerk

## Solution 1

```javascript
function tickets(peopleInLine) {
  var a25 = 0, a50 = 0;
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      a25 += 1;
    }
    if (peopleInLine[i] == 50) {
      a25 -= 1;
      a50 += 1;
    }
    if (peopleInLine[i] == 100) {
      if (a50 == 0 && a25 >= 3) {
        a25 -= 3;
      } else {
        a25 -= 1;
        a50 -= 1;
      }
    }
    if (a25 < 0 || a50 < 0) {
      return 'NO';
    }
  }
  return 'YES';
}
```

## Solution 2

```javascript
function Clerk(name) {
  this.name = name;

  this.money = {
    25: 0,
    50: 0,
    100: 0
  };

  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine) {
  var jake = new Clerk("Jake");
  return peopleInLine.every(jake.sell.bind(jake)) ? "YES" : "NO";
}
```

## Solution 3

```javascript
function tickets(money) {
  var bank = [];
  for (var i = 0; i < money.length; i++) {
    if (money[i] > 25) {
      var need_return = money[i] - 25;

      bank = bank.sort();
      bank = bank.reverse();

      for (var j = 0; j < bank.length; j++) {
        if (need_return - bank[j] >= 0) {
          need_return -= bank[j];
          bank[j] = 0;
        }
        if (need_return == 0) {
          bank.push(money[i]);
          break;
        }
      }

      if (need_return != 0) return "NO";
    } else {
      bank.push(25);
    }
  }

  return "YES";
}
```

## Solution 4 (Courtesy of James)

```javascript
function tickets(peopleinline) {
  var bill25 = 0;
  var bill50 = 0;
  haveMoney = true;
  for (var i = 0; i < peopleinline.length; i++) {
    switch (peopleinline[i]) {
      case 25:
        bill25 += 1;
        haveMoney = true;
        break;

      case 50:
        bill50 += 1;
        if (bill25 >= 1) {
          bill25 -= 1;
          haveMoney = true;
        } else {
          haveMoney = false
          return 'NO'
        }
        break;

      case 100:
        if (bill25 >= 1 && bill50 >= 1) {
          bill50 -= 1;
          bill25 -= 1;
          haveMoney = true;
        } else if (bill25 >= 3) {
          bill25 -= 3;
          haveMoney = true;
        } else {
          haveMoney = false;
          return 'NO'
        }
        break;
    }
  }
  if (haveMoney === true) {
    return 'YES'
  }
};
```

## Solution 5 (Courtesy of Jon)

```javascript
function tickets(peopleInLine) {
  var bank = [];

  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {

      case 25:
        //pushes the $25
        bank.push(25);
        break;

      case 50:
        //If there aren't any $25, cannot provide change
        if (countOf(bank, 25) === 0) {
          return false;
        }
        //Adds the $50 bill
        bank.push(50);
        //Removes a $25 bill
        bank.splice(bank.indexOf(25), 1);
        break;

      case 100:
        //If there aren't any $25 and $50 bills, cannot provide change
        if (!(countOf(bank, 25) >= 3 || (countOf(bank, 25) >= 1 && countOf(bank, 50) >= 1))) {
          return false
        }
        //Adds the $100 bill
        bank.push(100);
        //Assuming you can provide change, it's better to give a $50 and a $25 before you give 3 $25s
        if (countOf(bank, 50) > 0) {
          bank.splice(bank.indexOf(25), 1);
          bank.splice(bank.indexOf(50), 1);
        } else {
          bank.splice(bank.indexOf(25), 1);
          bank.splice(bank.indexOf(25), 1);
          bank.splice(bank.indexOf(25), 1);
        }
        break;
    }
  }
  return true;
}

//returns count of val in array
function countOf(array, val) {
  var count = 0;
  for (var i in array) {
    if (array[i] === val) count++;
  }
  return count;
}
```
