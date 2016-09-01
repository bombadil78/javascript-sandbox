var obj = function() {

    // scope of x and y is NOT global which is good
    var x = 10;
    var y = 10;

    return {
        "name": "this is my name",
        "addTo20": function(z) {
            return x + y + z;
        }
    }
}();

console.log(obj.addTo20(10));

