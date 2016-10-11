/**
 * Constructor configs
 */

var $ = require('jquery');

function CuteAnimal(config){
  var defaults = {
    floppyEars: true
  };

  var settings = $.extend({}, defaults, config);

  this.floppyEars = settings.floppyEars;

  this.pur = function(){
    console.log(this.name, 'puuurrrr');
  };
}

function Dog(config){

  var defaults = {
    hungry: true,
    height: 'tall'
  };

  var settings = $.extend({}, defaults, config);

  this.hungry = settings.hungry;
  this.height = settings.height;
}

Dog.prototype = new CuteAnimal();

var kepler = new Dog({
  name: 'kepler',
  height: 'short',
  hungry: false,
  floppyEars: false
});

var oliver = new Dog({
  name: 'oliver'
});

kepler.name = 'Kepler';
kepler.pur();


/**
 * Closures
 */

function showName(firstName){
  console.log(firstName);
  var favoriteNumber = 42;

  function buildName(lastName){
    console.log(favoriteNumber);
    var title = 'JS Hacker';

    (function(){
      console.log(firstName, 'is a', title, 'maybe...');
    }());

    return firstName + ' ' + lastName;
  }

  return buildName;
}

var nameBuilder = showName('Dan');

console.log(nameBuilder);

console.log(nameBuilder('Dietz'));

console.log(showName);


/**
 * Currying
 */

function addNumbers(num1, num2){
  return num1 + num2;
}

console.log(addNumbers(2, 2));

function add(num1){

  function addSecondNumber(num2){
    return num1 + num2;
  }

  return addSecondNumber;
}

var addTwo = add(2);
console.log(addTwo(2));
console.log(addTwo(5));

var addNine = add(9);
console.log(addNine(10));

console.log(add(2)(2));

console.log(addTwo(20));

console.log(addTwo(addNine(10)));


var truck = function(config){
  var wheels = 4;
  var doors = 2;

  var hook = function(){
    console.log('beep beep');
  };

  var drive = function(){
    console.log('vrooooooming on ', wheels, 'wheels');
  };

  (function init(){
    hook();
    drive();
  }());
};

truck();


///
