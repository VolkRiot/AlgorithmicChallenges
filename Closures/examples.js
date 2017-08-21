// Excerpt From: David Herman. “Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript.” iBooks.

// of Javascript

// Fact #1 JS allows you to refer to variables defined outside of itself.
function makeSandwich() {
  var magicIngredient = 'peanut butter';
  function make(filling) {
    return magicIngredient + ' and ' + filling;
  }
  return make('jelly');
}

console.log(makeSandwich());

// Fact #2 Functions can refer to those outer functions even after the outer
// function has returned.

function sandwichMaker(magicIngredient) {
  function make(filling) {
    return magicIngredient + ' and ' + filling;
  }
  return make;
}

var f = sandwichMaker('peanut butter');

console.log(f('jelly'));
console.log(f('bananas'));
console.log(f('marshmallows'));

var hamAnd = sandwichMaker('ham');
console.log(hamAnd('cheese')); // "ham and cheese"
console.log(hamAnd('mustard')); // "ham and mustard"
var turkeyAnd = sandwichMaker('turkey');
console.log(turkeyAnd('Swiss')); // "turkey and Swiss"
console.log(turkeyAnd('Provolone')); // "turkey and Provolone”

// Fact #3 Closures store and can update references to values

function box() {
  var val = undefined;
  return {
    set: function(newVal) {
      val = newVal;
    },
    get: function() {
      return val;
    },
    type: function() {
      return typeof val;
    }
  };
}

var b = box();
console.log(b.type());
b.set(98.6);
console.log(b.get());
console.log(b.type());
