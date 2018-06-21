# Friday Algorithm - NSAPhoneTapping

## Solution 1

```JavaScript
var NSA = {
  log: function(person) {
    if (person.history.length === 0) {
      return "No Entries";
    }

    var history = person.history.join("\n");
    person.history = [];

    return history;
  }
};

var Person = function(name) {
  var self = this;

  this.name = name;
  this.history = [];
}

Person.prototype.call = function(phone, callee) {
  var message = this.name + " called " + callee.name + " from " + phone.owner.name + "\'s phone(" + phone.number + ")";
  this.history.push(message);
};

Person.prototype.text = function() {
  var argsArray = [].slice.call(arguments);
  var phone = argsArray.shift();
  var recepients = argsArray;

  recepients.forEach(function(recepient) {
    var message = this.name + " texted " + recepient.name + " from " + phone.owner.name + "\'s phone(" + phone.number + ")";
    this.history.push(message);
  }.bind(this));
}
```

## Solution 2

```JavaScript
// Create the Person constructor
var Person = function(name) {
  this.name = name;
}

// Create encapsulated NSA object & Person methods.
// This way you cannot access the log in any way, except through the exposed log method.
var NSA = (function() {
  var _log = {};

  Person.prototype.call = function(cellphone, callee) {
    var l = _log[this.name] = _log[this.name] || [];
    var str = this.name + " called " + callee.name + " from " + cellphone.owner.name + "'s phone("+cellphone.number+")";
    l.push(str);
  }
  Person.prototype.text = function(cellphone) {
    var l = _log[this.name] = _log[this.name] || [];
    for (var i=1; i<arguments.length; i++) {
      var str = this.name + " texted " + arguments[i].name + " from " + cellphone.owner.name + "'s phone("+cellphone.number+")";
      l.push(str);
    }
  }

  return { log:
    function(p) {
      var n = p.name;
      if (!_log[n]) return "No Entries";
      var r = _log[n].join("\n");
      delete _log[n];
      return r;
    }
  };
})();
```
