var animal = function(id) {
    var that = { id: id };
    return that;
};

var bird = function(id, name) {
    var that = animal(id);
    that.name = name;
    // since it is the method form, this is bound to the object
    // the object was created by animal() and augmented here
    that.feep = function() {
        return "Feep: " + this.id + " / " + this.name;
    };
    return that;
};

var superBird = function(id, name) {
    var that = bird(id, name);
    var normalFeep = that.feep();
    that.feep = function() {
        return normalFeep + "!!!";
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