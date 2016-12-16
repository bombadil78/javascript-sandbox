var obj = {
    name: "my-name"
};

var f = function() {
    console.log(this.name);
    for (var i = 0; i < arguments.length; i++) {
        console.log("arg" + i + "=" + i);
    }
};

var callMethod = function(obj, method) {
    var args = [].slice.call(arguments, 2);
    console.log(args);
}

f.apply(obj, [ 1, 2, 3 ]);
callMethod({}, function() {});
callMethod({}, function() {}, 1, 2, 3);

