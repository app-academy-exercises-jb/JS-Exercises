//using Object.create // WRONG
// Function.prototype.inherits = function(Parent) {
//   let that = Object.create(Parent.prototype),
//     other = this.apply(that, arguments);

//   return (typeof other === 'object' && other) || that;
// };
  
//using new //
Function.prototype.inherits = function(Parent) {
  this.prototype = new Parent();
  this.prototype.constructor = this;
  return this;
};

//using Surrogate //
Function.prototype.inherits = function(Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject () {
  this.prop = "prop"
}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function func() { console.log("i'm a movable"); };
// MovingObject.prototype.prop = "prop"
Ship.prototype.ship = function ship() { console.log("ship"); };
Asteroid.prototype.aster = function() {console.log("aster"); };
Asteroid.prototype.prop = "asteroid"

mover = new MovingObject();
ship = new Ship();
aster = new Asteroid();

mover.move(); // "i'm a movable"
mover.ship(); //error
mover.aster(); //error

ship.move(); // "i'm a movable"
ship.ship(); // "ship"
ship.aster(); // error

aster.move(); // "i'm a movable"
aster.ship(); // error
aster.aster(); // "aster"


class Mover {
  constructor() {
    this.prop = "prop";
  }
}

class Ship extends Mover {}