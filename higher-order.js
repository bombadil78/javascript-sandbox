console.log([ "a", "b", "c"].map(function(v) {
    return v.toUpperCase();
}));

console.log([ "a", "b", "c"].reduce(function(previousValue, currentValue, index, array) {
    console.log("previousValue=" + previousValue);
    console.log("currentValue=" + currentValue);
    console.log("index=" + index);
    console.log("array=" + array);

    return previousValue + currentValue;
}, "START: "));

var obj = {

    data: [],

    // use function
    forEach: function(f) {
        for (var i = 0; i < this.data.length; i++) {
            f(this.data[i]);
        }
    },

    // use method
    forEachTwo: function(f) {
        for (var i = 0; i < this.data.length; i++) {
            f.call(this.data[i]);
        }
    }
};

obj.data.push("a");
obj.data.push("b");
obj.data.push("c");
console.log(obj.data);
obj.forEach(function(someObj) {
    console.log(someObj);
});

obj.data = [];
obj.data.push({ name: "x" });
obj.data.push({ name: "y" });
obj.data.push({ name: "z" });
obj.forEachTwo(function() {
    console.log(this.name);
});




