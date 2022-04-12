// Only change code below this line
class Pets {
    constructor(name, legs) {
        function walk() {
            var numberOfLegs = name + " is walking on " + legs + " legs.";
            return numberOfLegs;
        }
    }
}
class Dog extends Pets {
    constructor(name, legs) {
    super(name);
    this.legs = legs; {
        function bark() {
            var dogSay = name + " says WUF-WUF";
            return dogSay;
        }
    }
  }
}
// Only change code above this line
let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
Pets,
Dog
}