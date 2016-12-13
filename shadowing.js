document.addEventListener("DOMContentLoaded", function() {
    var e = 0;
    var ee = 10;

    var f = function() {
        console.log(ee);
        // this should give you 10
        console.log(e);
        // should give you undefined, not 0. the variable is shadowed since it is defined in the scope of f()
        var e = 1;
        console.log(e);
        // should give you 1
    };

    f();
});