document.addEventListener("DOMContentLoaded", function() {

    // prototypal inheritance: use the prototype link
    var pet = {
        setName: function(name) {
            this.name = name;
        },
        getName: function() {
            return this.name;
        }
    };

    var cat = Object.create(pet);
    cat.miau = function() {
      console.log("miau, my name is " + this.getName());
    };

    cat.setName("super-cat");
    cat.miau();

    // pseudo-classical inheritance
    // 1) constructor method
    var Pet = function(name) {
        this.name = name;
    };

    // 2) augment constructor's prototype
    Pet.prototype.setName = function(name) {
        this.name = name;
    };
    Pet.prototype.getName = function() {
        return this.name;
    };

    // 3) create a new object with a link back to constructor method's "prototype" member
    var pet = new Pet("pet");
    console.log(pet.getName());

    // create a subclass
    // create a new constructor method ...
    var Cat = function(name) {
        Pet.call(this, name);
    };
    // .. create a new object that has a link to Pet's prototype and assign it to Cat's prototype (code reuse) ...
    Cat.prototype = Object.create(Pet.prototype);
    // ... and then link it back to the constructor method to know who the creator was ...
    Cat.prototype.constructor = Cat;
    // ... and finally augment cat's prototype
    Cat.prototype.miau = function() {
        console.log("miau, my name is " + this.getName());
    };
    var cat = new Cat();
    cat.setName("super-cat");
    cat.miau();
});