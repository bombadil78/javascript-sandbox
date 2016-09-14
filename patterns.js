var animal = function(id) {
    return {};
};

var bird = function(id, name) {
    var that = animal(id);
    that.name = name;
    // since it is the method form, this is bound to the object
    // the object was created by animal() and augmented here
    that.feep = function() {
        return "Feep: " + id + " / " + this.name;
    };
    return that;
};

var superBird = function(id, name) {
    var that = bird(id, name);
    // get a reference to super method ...
    var superFeep = that.feep;
    that.feep = function() {
        // ... apply it on subclasses' object
        return superFeep.apply(that);
    };
    return that;
};

document.addEventListener("DOMContentLoaded", function() {

    var arr = [];
    arr.push(bird(1, 'b1'));
    arr.push(superBird(2, 'b2'));

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].feep());
    }

});